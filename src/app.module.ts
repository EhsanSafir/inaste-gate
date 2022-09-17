import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import configuration from "../config/configuration";
import { validate } from "./common/validator/env.validation";

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
        envFilePath: `${process.cwd()}/envs/.env.${process.env.NODE_ENV}`,
        load: [configuration],
        validate
      }
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
