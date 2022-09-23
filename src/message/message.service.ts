import { Injectable } from '@nestjs/common';
import { CreateMessageInput } from './dto/create-message.input';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Message } from "./entities/message.entity";
import { UsersService } from "../users/users.service";

@Injectable()
export class MessageService {
  constructor(@InjectRepository(Message) private  messageRepository:Repository<Message>,
              private userService:UsersService
              ) {
  }
  async create(createMessageInput: CreateMessageInput) {
    const messageInstance = this.messageRepository.create(createMessageInput)
    return this.messageRepository.save(messageInstance)
  }

  findByUser(userId:string) {
    return this.messageRepository.findBy({receiverId:userId})
  }

  findOwnerUser(userId:string) {
    return  this.userService.findOneById(userId)
  }


}
