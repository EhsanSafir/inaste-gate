import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { PubSub } from "graphql-subscriptions";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "./entities/message.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Message])],
  providers: [MessageResolver, MessageService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    }]
})
export class MessageModule {}
