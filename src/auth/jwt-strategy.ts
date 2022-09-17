import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TokensType } from "../common/enums/jwt.enum";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('secret_key'),
    });
  }

  async validate(payload: any) {
    if (payload.sub !== TokensType.ACCESS_TOKEN){
      throw new UnauthorizedException();
    }
    return { userId: payload.userId, email: payload.email };
  }
}