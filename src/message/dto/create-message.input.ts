import { InputType, Field, OmitType } from "@nestjs/graphql";
import { Message } from "../entities/message.entity";

@InputType()
export class CreateMessageInput extends OmitType(Message, ["id",'createdAt','sender','receiver'] as const, InputType) {

  @Field(() => String,{nullable:true})
  senderId: string;

}
