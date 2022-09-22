import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateInvestorParticipantInput {
  @Field(() => String)
  startupId: String;
}
