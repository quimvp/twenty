import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { WorkspaceMemberCreateNestedOneWithoutUserInput } from '../workspace-member/workspace-member-create-nested-one-without-user.input';
import { RefreshTokenCreateNestedManyWithoutUserInput } from '../refresh-token/refresh-token-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutAuthorInput } from '../comment/comment-create-nested-many-without-author.input';
import { CommentThreadCreateNestedManyWithoutAuthorInput } from '../comment-thread/comment-thread-create-nested-many-without-author.input';
import { CommentThreadCreateNestedManyWithoutAssigneeInput } from '../comment-thread/comment-thread-create-nested-many-without-assignee.input';
import { UserSettingsCreateNestedOneWithoutUserInput } from '../user-settings/user-settings-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutCompaniesInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    firstName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    lastName?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean()
    @Validator.IsOptional()
    emailVerified?: boolean;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    avatarUrl?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    phoneNumber?: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    @Validator.IsOptional()
    lastSeen?: Date | string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean()
    @Validator.IsOptional()
    disabled?: boolean;

    @HideField()
    passwordHash?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    @Validator.IsOptional()
    metadata?: any;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @HideField()
    workspaceMember?: WorkspaceMemberCreateNestedOneWithoutUserInput;

    @HideField()
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;

    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutAuthorInput;

    @Field(() => CommentThreadCreateNestedManyWithoutAuthorInput, {nullable:true})
    authoredCommentThreads?: CommentThreadCreateNestedManyWithoutAuthorInput;

    @Field(() => CommentThreadCreateNestedManyWithoutAssigneeInput, {nullable:true})
    assignedCommentThreads?: CommentThreadCreateNestedManyWithoutAssigneeInput;

    @Field(() => UserSettingsCreateNestedOneWithoutUserInput, {nullable:false})
    settings!: UserSettingsCreateNestedOneWithoutUserInput;
}
