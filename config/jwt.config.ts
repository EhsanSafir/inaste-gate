import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";
@Injectable()
export default class JwtConfigService implements JwtOptionsFactory {
  constructor(private configService:ConfigService) {}

  async createJwtOptions(): Promise<JwtModuleOptions> {
    const secret_key =await this.configService.get<string>('secret_key')
    return {
      secret: secret_key,
      signOptions:{
        expiresIn:'60min'
      }
    };
  }
}