import { CreateStartupInput } from "./create-startup.input";
import { Field, InputType, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateStartupInput extends PartialType(CreateStartupInput) {

  @Field(() => String)
  id: string;

}
