import { Resolver, Query, Mutation, Args, Int, Subscription, ResolveField, Parent } from "@nestjs/graphql";
import { MessageService } from "./message.service";
import { Message } from "./entities/message.entity";
import { CreateMessageInput } from "./dto/create-message.input";
import { Inject } from "@nestjs/common";
import { PubSubEngine } from "graphql-subscriptions";
import { Public } from "../common/decorator/public.decorator";
import { CurrentUser } from "../common/decorator/current-user.decorator";
import { UserPayloadTypes } from "../users/types/user-payload.types";
import { User } from "../users/entities/user.entity";
import { StartupsApply } from "../startups-apply/entities/startups-apply.entity";

@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private readonly messageService: MessageService,
    @Inject("PUB_SUB") private pubSub: PubSubEngine
  ) {
  }

  @Mutation(() => Message)
  async createMessage(@Args("createMessageInput") createMessageInput: CreateMessageInput, @CurrentUser() currentUser: UserPayloadTypes) {
    createMessageInput.senderId = currentUser.userId;  // make readonly senderId
    const messageInstance = await this.messageService.create(createMessageInput);
    await this.pubSub.publish("messageEvent", { "messageEvent": messageInstance });
    return messageInstance;
  }

  @Query(() => [Message], { name: "messageByCurrentUser" })
  findAllMessageByUser(@CurrentUser() currentUser: UserPayloadTypes) {
    console.log(currentUser);
    return this.messageService.findByUser(currentUser.userId);
  }

  @ResolveField(() => User)
  sender(@Parent() parent: Message): Promise<User> {
    return this.messageService.findOwnerUser(parent.senderId);
  }

  @ResolveField(() => User)
  receiver(@Parent() parent: Message): Promise<User> {
    return this.messageService.findOwnerUser(parent.receiverId);
  }

  @Subscription(returns => Message,
    {
      filter: (payload, variables, context) => {
        console.log(context.user.userId);
        return context.user.userId === payload.messageEvent.receiverId;
      }
    })
  @Public()
  messageEvent() {
    return this.pubSub.asyncIterator("messageEvent");
  }

}
