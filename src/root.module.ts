import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "../config/configuration";
import { validate } from "./common/validator/env.validation";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailerModule } from "@nestjs-modules/mailer";
import { MailerConfig } from "../config/mailer.config";

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
        envFilePath: `${process.cwd()}/envs/.env.${process.env.NODE_ENV}`,
        load: [configuration],
        validate
      }
    ),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return configService.get("database");
      },
      inject: [ConfigService]
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MailerConfig
    }),
  ],
  controllers: [],
  providers: []
})
export class RootModule {
}
