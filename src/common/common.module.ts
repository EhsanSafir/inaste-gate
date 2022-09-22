import { Global, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";
import JwtConfigService from "../../config/jwt.config";
import { PasswordUtils } from "./utils/password.utils";
import { JwtUtils } from "./utils/jwt.utils";

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
export class CommonModule {
}
