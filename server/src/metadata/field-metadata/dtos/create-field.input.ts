import { Field, HideField, InputType } from '@nestjs/graphql';

import { BeforeCreateOne } from '@ptc-org/nestjs-query-graphql';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

import { FieldMetadataType } from 'src/database/typeorm/metadata/entities/field-metadata.entity';
import { BeforeCreateOneField } from 'src/metadata/field-metadata/hooks/before-create-one-field.hook';

@InputType()
@BeforeCreateOne(BeforeCreateOneField)
export class CreateFieldInput {
  @IsString()
  @IsNotEmpty()
  @Field()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  label: string;

  @IsEnum(FieldMetadataType)
  @IsNotEmpty()
  @Field(() => FieldMetadataType)
  type: FieldMetadataType;

  @IsUUID()
  @Field()
  objectMetadataId: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  description?: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  icon?: string;

  @HideField()
  workspaceId: string;
}
