import { Resolver, Query, Mutation, Args, Int, Subscription } from "@nestjs/graphql";
import { MessageService } from "./message.service";
import { Message } from "./entities/message.entity";
import { CreateMessageInput } from "./dto/create-message.input";
import { Inject } from "@nestjs/common";
import { PubSubEngine } from "graphql-subscriptions";
import { Public } from "../common/decorator/public.decorator";
import { CurrentUser } from "../common/decorator/current-user.decorator";
import { UserPayloadTypes } from "../users/types/user-payload.types";

@Resolver(() => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService,
              @Inject("PUB_SUB") private pubSub: PubSubEngine
  ) {
  }

  @Mutation(() => Message)
  async createMessage(@Args("createMessageInput") createMessageInput: CreateMessageInput,@CurrentUser() currentUser:UserPayloadTypes) {
    createMessageInput.senderId = currentUser.userId  // make readonly senderId
    const messageInstance = await  this.messageService.create(createMessageInput);
    await this.pubSub.publish("messageEvent", { 'messageEvent': messageInstance});
    return messageInstance;
  }

  @Query(() => [Message], { name: "message" })
  findAllMessageByUser(@CurrentUser() currentUser:UserPayloadTypes) {
    console.log(currentUser)
    return this.messageService.findByUser(currentUser.userId);
  }


  @Subscription(returns => Message,
    {
      filter: (payload, variables,context) =>{
        console.log(context.user.userId )
        return context.user.userId === payload.messageEvent.receiverId
      }
    })
  @Public()
  messageEvent() {
    return this.pubSub.asyncIterator("messageEvent");
  }

}
