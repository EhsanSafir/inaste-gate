import { IsNotEmpty, Validate } from "class-validator";
import { Field, ArgsType } from "@nestjs/graphql";
import { IsValidRefreshToken } from "../validator/refresh-token.validator";

@ArgsType()
export class RefreshTokenArgs {
  @Field(() => String)
  @IsNotEmpty()
  @Validate(IsValidRefreshToken)
  token: string;

}