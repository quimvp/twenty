import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PipelineProgressUpdateManyWithoutPipelineStageNestedInput } from '../pipeline-progress/pipeline-progress-update-many-without-pipeline-stage-nested.input';
import { PipelineUpdateOneRequiredWithoutPipelineStagesNestedInput } from '../pipeline/pipeline-update-one-required-without-pipeline-stages-nested.input';

@InputType()
export class PipelineStageUpdateWithoutWorkspaceInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    index?: NullableIntFieldUpdateOperationsInput;

    @HideField()
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PipelineProgressUpdateManyWithoutPipelineStageNestedInput, {nullable:true})
    pipelineProgresses?: PipelineProgressUpdateManyWithoutPipelineStageNestedInput;

    @Field(() => PipelineUpdateOneRequiredWithoutPipelineStagesNestedInput, {nullable:true})
    pipeline?: PipelineUpdateOneRequiredWithoutPipelineStagesNestedInput;
}
