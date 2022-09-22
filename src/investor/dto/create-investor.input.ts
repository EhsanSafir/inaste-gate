import { InputType, Int, Field } from "@nestjs/graphql";
import { ConfirmStatusEnum } from "../../common/enums/confirm-status.enum";

@InputType()
export class CreateInvestorInput {

  @Field(() => Int)
  age: number;

  @Field(() => String)
  investmentEmail: String;


  @Field(() => String)
  investmentField: String;

  // TODO investment field category
  @Field(() => Int)
  totalAnnualIncome: number;



  @Field(() => Int)
  employCount: number;

  @Field(() => String)
  organizationalChat: string;

  @Field(() => String)
  previewExp: string;



  @Field(() => String,{nullable:true})
  userId?: string;
}
