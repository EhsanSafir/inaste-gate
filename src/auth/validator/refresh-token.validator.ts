import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import {Injectable} from '@nestjs/common';
import { JwtUtils } from "../../utils/jwt.utils";
import { TokensType } from "../../common/enums/jwt.enum";
import { TokenPayload } from "../types/token-payload.type";
// import { TokensType } from "../../utils/enums/jwt.enum";

@ValidatorConstraint({ name: 'IsValidRefreshToken', async: true })
@Injectable()
export class IsValidRefreshToken implements ValidatorConstraintInterface {
  constructor(protected readonly jwtUtils: JwtUtils) {}

  async validate(text: string) {
    try {
      const result :TokenPayload= await this.jwtUtils.verifyAsyncToken(text)
      return result.sub === TokensType.REFRESH_TOKEN;

    }
    catch (e) {
      return false
    }

  }
  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'invalid token or expired'
  }
}