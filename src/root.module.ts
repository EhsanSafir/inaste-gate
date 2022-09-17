import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "../config/configuration";
import { validate } from "./common/validator/env.validation";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailerModule } from "@nestjs-modules/mailer";
import { MailerConfig } from "../config/mailer.config";
import { UsersModule } from "./users/users.module";
import { UtilsModule } from "./utils/utils.module";
import { join } from "path";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { AuthModule } from "./auth/auth.module";

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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true
    }),
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
    UsersModule,
    UtilsModule,
    AuthModule
  ],
  controllers: [],
  providers: [ ]
})
export class RootModule {
}
