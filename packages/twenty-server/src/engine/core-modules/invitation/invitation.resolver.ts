import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthWorkspace } from 'src/engine/decorators/auth/auth-workspace.decorator';
import { JwtAuthGuard } from 'src/engine/guards/jwt.auth.guard';
import { InvitationService } from 'src/engine/core-modules/invitation/services/invitation.service';
import { Workspace } from 'src/engine/core-modules/workspace/workspace.entity';

@UseGuards(JwtAuthGuard)
@Resolver()
export class InvitationResolver {
  constructor(private readonly invitationService: InvitationService) {}

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  async deleteWorkspaceInvitation(
    @Args('appTokenId') appTokenId: string,
    @AuthWorkspace() { id: workspaceId }: Workspace,
  ) {
    return this.invitationService.deleteInvitation(appTokenId, workspaceId);
  }
}
