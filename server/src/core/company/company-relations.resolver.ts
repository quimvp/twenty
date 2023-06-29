import { Resolver, ResolveField, Root, Int } from '@nestjs/graphql';
import { CommentThread } from 'src/core/@generated/comment-thread/comment-thread.model';
import { Comment } from 'src/core/@generated/comment/comment.model';
import { Company } from 'src/core/@generated/company/company.model';
import { CommentThreadService } from '../comment/services/comment-thread.service';
import { CommentService } from '../comment/services/comment.service';
import {
  PrismaSelect,
  PrismaSelector,
} from 'src/decorators/prisma-select.decorator';

@Resolver(() => Company)
export class CompanyRelationsResolver {
  constructor(
    private readonly commentThreadService: CommentThreadService,
    private readonly commentService: CommentService,
  ) {}

  @ResolveField(() => [CommentThread], {
    nullable: false,
  })
  async commentThreads(
    @Root() company: Company,
    @PrismaSelector({ modelName: 'CommentThread' })
    prismaSelect: PrismaSelect<'CommentThread'>,
  ): Promise<Partial<CommentThread>[]> {
    return this.commentThreadService.findMany({
      where: {
        commentThreadTargets: {
          some: {
            commentableId: company.id,
            commentableType: 'Company',
          },
        },
      },
      select: prismaSelect.value,
    });
  }

  @ResolveField(() => [Comment], {
    nullable: false,
  })
  async comments(
    @Root() company: Company,
    @PrismaSelector({ modelName: 'Comment' })
    prismaSelect: PrismaSelect<'Comment'>,
  ): Promise<Partial<Comment>[]> {
    return this.commentService.findMany({
      where: {
        commentThread: {
          commentThreadTargets: {
            some: {
              commentableId: company.id,
              commentableType: 'Company',
            },
          },
        },
      },
      select: prismaSelect.value,
    });
  }

  @ResolveField(() => Int, {
    nullable: false,
  })
  async _commentCount(@Root() company: Company): Promise<number> {
    return this.commentService.count({
      where: {
        commentThread: {
          commentThreadTargets: {
            some: {
              commentableId: company.id,
              commentableType: 'Company',
            },
          },
        },
      },
    });
  }
}
