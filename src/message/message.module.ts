import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { PubSub } from "graphql-subscriptions";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "./entities/message.entity";
import { UsersModule } from "../users/users.module";

@Module({
  imports:[TypeOrmModule.forFeature([Message]),UsersModule],
  providers: [MessageResolver, MessageService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    }]
})
export class MessageModule {}
