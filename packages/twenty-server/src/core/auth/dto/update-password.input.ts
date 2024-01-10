import { ArgsType, Field } from '@nestjs/graphql';

import { IsNotEmpty, IsString } from 'class-validator';

@ArgsType()
export class UpdatePasswordInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  passwordResetToken: string;
}
