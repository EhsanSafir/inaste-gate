import { Controller, Get, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { ConfirmTokenCreate } from "./dto/confirm-token.create";
import { AuthService } from "./auth.service";
import { Public } from "../common/decorator/public.decorator";
import { TokenPayload } from "./types/token-payload.type";
import { JwtUtils } from "../common/utils/jwt.utils";

@Controller("auth")
export class AuthController {
  constructor(private readonly jwtUtils:JwtUtils,private readonly authService:AuthService) {}
  @Get('confirm')
  @UsePipes(ValidationPipe)
  @Public()
  async confirmEmail(@Query() queryParams:ConfirmTokenCreate) : Promise<boolean>{
    const payload : TokenPayload= await this.jwtUtils.verifyAsyncToken(queryParams.token) // TODO : token must be used only once
    return await this.authService.activeEmail(payload.email)
  }
}
