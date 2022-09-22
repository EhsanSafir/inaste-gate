import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "../config/configuration";
import { validate } from "./common/validator/env.validation";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailerModule } from "@nestjs-modules/mailer";
import { MailerConfig } from "../config/mailer.config";
import { UsersModule } from "./users/users.module";
import { UtilsModule } from "./utils/utils.module";
import { GraphQLModule } from "@nestjs/graphql";
import { AuthModule } from "./auth/auth.module";
import { StartupsModule } from "./startups/startups.module";
import { StartupsApplyModule } from "./startups-apply/startups-apply.module";
import { InvestorModule } from "./investor/investor.module";
import { GqlConfigService } from "../config/gql.config";
import { ApolloDriver } from "@nestjs/apollo";
import { MessageModule } from './message/message.module';


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
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
      driver: ApolloDriver,
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
    AuthModule,
    StartupsModule,
    StartupsApplyModule,
    InvestorModule,
    MessageModule
  ],
  controllers: [],
  providers: [

  ]
})
export class RootModule {
}
