import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutRefreshTokensNestedInput } from '../user/user-update-one-required-without-refresh-tokens-nested.input';

@InputType()
export class RefreshTokenUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean()
    @Validator.IsOptional()
    isRevoked?: boolean;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @HideField()
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput;
}
