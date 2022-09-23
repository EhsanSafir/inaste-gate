import { InputType, Field, OmitType } from "@nestjs/graphql";
import { Investor } from "../entities/investor.entity";

@InputType()
export class CreateInvestorInput extends OmitType(Investor, ["id",'user','confirmStatus'] as const, InputType) {

  @Field(() => String,{nullable:true})
  userId: string;
}
