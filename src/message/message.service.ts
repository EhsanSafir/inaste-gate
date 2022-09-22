import { Injectable } from '@nestjs/common';
import { CreateMessageInput } from './dto/create-message.input';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Message } from "./entities/message.entity";

@Injectable()
export class MessageService {
  constructor(@InjectRepository(Message) private  messageRepository:Repository<Message>) {
  }
  async create(createMessageInput: CreateMessageInput) {
    const messageInstance = this.messageRepository.create(createMessageInput)
    return this.messageRepository.save(messageInstance)
  }

  findByUser(userId) {
    return this.messageRepository.findBy({receiverId:userId})
  }

}
