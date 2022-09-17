import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { TokensType } from "../common/enums/jwt.enum";

@Injectable()
export class JwtUtils {
  constructor(private jwtService: JwtService, private configService: ConfigService) {
  }

  async signConfirmMaile(email: string, expiresIn?: string): Promise<string> {
    expiresIn = expiresIn ?? await this.configService.get<string>("jwt.confirm_mail_expiresIn");
    const tokenPayload = {
      email,
      sub: TokensType.CONFIRM_EMAIL_TOKEN
    }; // TODO Define Type to payload
    return await this.jwtService.signAsync(tokenPayload, { expiresIn });
  }

  async verifyToken(token: string) {
    return await this.jwtService.verifyAsync(token, { ignoreExpiration: false });
  }

  async signAccessToken(email: string, userId: string, expiresIn?: string) {
    expiresIn = expiresIn ?? await this.configService.get<string>("jwt.access_token_expiresIn");
    const tokenPayload = {
      email,
      userId,
      sub: TokensType.ACCESS_TOKEN
    };
    return await this.jwtService.signAsync(tokenPayload, { expiresIn });
  }

  async signRefreshToken(email: string, userId: string, expiresIn?: string) {
    expiresIn = expiresIn ?? await this.configService.get<string>("jwt.refresh_token_expiresIn");
    const tokenPayload = {
      email,
      userId,
      sub: TokensType.REFRESH_TOKEN
    };
    return await this.jwtService.signAsync(tokenPayload, { expiresIn });
  }
}
