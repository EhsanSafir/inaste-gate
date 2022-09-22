import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateMessageInput {

  @Field(() => String)
  subject: string;

  @Field(() => String)
  body: string;




  @Field(() => String,{nullable:true})
  senderId?: string;


  @Field(() => String)
  receiverId: string;


}
