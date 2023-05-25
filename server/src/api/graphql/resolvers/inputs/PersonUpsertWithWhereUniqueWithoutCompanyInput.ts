import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutCompanyInput } from "../inputs/PersonCreateWithoutCompanyInput";
import { PersonUpdateWithoutCompanyInput } from "../inputs/PersonUpdateWithoutCompanyInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpsertWithWhereUniqueWithoutCompanyInput", {
  isAbstract: true
})
export class PersonUpsertWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutCompanyInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutCompanyInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutCompanyInput, {
    nullable: false
  })
  create!: PersonCreateWithoutCompanyInput;
}
