import { IsNotEmpty, Validate } from "class-validator";
import { Field, ArgsType } from "@nestjs/graphql";

@ArgsType()
export class StartupIdArgs {
  @Field(() => String)
  @IsNotEmpty()
  startup: string;

}