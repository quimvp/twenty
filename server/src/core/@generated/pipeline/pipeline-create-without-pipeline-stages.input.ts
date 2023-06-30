import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PipelineProgressableType } from '../prisma/pipeline-progressable-type.enum';
import { HideField } from '@nestjs/graphql';
import { PipelineProgressCreateNestedManyWithoutPipelineInput } from '../pipeline-progress/pipeline-progress-create-nested-many-without-pipeline.input';
import { WorkspaceCreateNestedOneWithoutPipelinesInput } from '../workspace/workspace-create-nested-one-without-pipelines.input';

@InputType()
export class PipelineCreateWithoutPipelineStagesInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    icon!: string;

    @Field(() => PipelineProgressableType, {nullable:true})
    pipelineProgressableType?: keyof typeof PipelineProgressableType;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PipelineProgressCreateNestedManyWithoutPipelineInput, {nullable:true})
    pipelineProgresses?: PipelineProgressCreateNestedManyWithoutPipelineInput;

    @HideField()
    workspace!: WorkspaceCreateNestedOneWithoutPipelinesInput;
}
