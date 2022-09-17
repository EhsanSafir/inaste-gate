import { Global, Module } from "@nestjs/common";
import { PasswordUtils } from "./password.utils";
import { JwtUtils } from "./jwt.utils";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";
import JwtConfigService from "../../config/jwt.config";

@Global()
@Module({
  imports:[
    JwtModule.registerAsync({
      imports:[ConfigModule],
      useClass: JwtConfigService
    }),
  ],
  providers: [PasswordUtils,JwtUtils],
  exports:[PasswordUtils,JwtUtils]
})
export class UtilsModule {
}
