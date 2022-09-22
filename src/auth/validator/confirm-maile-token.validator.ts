import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from "@nestjs/common";
import { TokenPayload } from "../types/token-payload.type";
import { TokensType } from "../../common/enums/jwt.enum";
import { JwtUtils } from "../../common/utils/jwt.utils";

@ValidatorConstraint({ name: "IsConfirmEmailToken", async: true })
@Injectable()
export class IsConfirmEmailToken implements ValidatorConstraintInterface {
  constructor(private readonly jwtUtils: JwtUtils) {
  }

  async validate(text: string) {
    try {
      const result: TokenPayload = await this.jwtUtils.verifyAsyncToken(text);
      return result.sub === TokensType.CONFIRM_EMAIL_TOKEN;

    } catch (e) {
      console.log(e)
      return false;
    }

  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return "invalid token or expired";
  }
}