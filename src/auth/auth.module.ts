import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from './auth.controller';
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local-strategy";
import { JwtStrategy } from "./jwt-strategy";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { User } from "../users/entities/user.entity";
import { IsConfirmEmailToken } from "./validator/confirm-maile-token.validator";
import { IsValidRefreshToken } from "./validator/refresh-token.validator";


@Module({
  imports:[TypeOrmModule.forFeature([User]),PassportModule],
  providers: [AuthResolver, AuthService,LocalStrategy,JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    IsConfirmEmailToken,IsValidRefreshToken

  ],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule {}
