import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PersonUpdateManyWithoutCompanyNestedInput } from '../person/person-update-many-without-company-nested.input';
import { UserUpdateOneWithoutCompaniesNestedInput } from '../user/user-update-one-without-companies-nested.input';

@InputType()
export class CompanyUpdateWithoutWorkspaceInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    name?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    domainName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    address?: string;

    @Field(() => Int, {nullable:true})
    @Validator.IsNumber()
    @Validator.IsOptional()
    employees?: number;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PersonUpdateManyWithoutCompanyNestedInput, {nullable:true})
    people?: PersonUpdateManyWithoutCompanyNestedInput;

    @Field(() => UserUpdateOneWithoutCompaniesNestedInput, {nullable:true})
    accountOwner?: UserUpdateOneWithoutCompaniesNestedInput;
}
