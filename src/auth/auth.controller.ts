import { Controller, Get, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { ConfirmTokenCreate } from "./dto/confirm-token.create";
import { JwtUtils } from "../utils/jwt.utils";
import { AuthService } from "./auth.service";
import { Public } from "../common/decorator/public.decorator";
import { TokenPayload } from "./types/token-payload.type";

@Controller("auth")
export class AuthController {
  constructor(private readonly jwtUtils:JwtUtils,private readonly authService:AuthService) {}
  @Get('confirm')
  @UsePipes(ValidationPipe)
  @Public()
  async confirmEmail(@Query() queryParams:ConfirmTokenCreate) : Promise<boolean>{
    const payload : TokenPayload= await this.jwtUtils.verifyToken(queryParams.token) // TODO user toke only once for verification
    return await this.authService.activeEmail(payload.email)
  }
}
