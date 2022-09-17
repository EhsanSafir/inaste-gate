import { IsNotEmpty, Validate } from "class-validator";
import { IsConfirmEmailToken } from "../validator/confirm-maile-token.validator";

export class ConfirmTokenCreate {
  @IsNotEmpty()
  @Validate(IsConfirmEmailToken)
  token: string;
}