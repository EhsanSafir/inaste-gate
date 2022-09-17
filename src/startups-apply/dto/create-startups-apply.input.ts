import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStartupsApplyInput {

  @Field(() => String)
  companyName: String;

  @Field(() => String)
  yourTitle: String;

  @Field(() => String)
  website: String;

  @Field(() => String)
  industryType: String;

  @Field(() => String)
  summery: String;

  @Field(() => String)
  companyAddress: String;

  @Field(() => Boolean)
  hasProductInMarket: Boolean;

  @Field(() => Boolean)
  isMakingMoney: Boolean;

  @Field(() => String)
  traction: String;

  @Field(() => String)
  totalRaisedUntilNow: String;

  @Field(() => String)
  pastProject: String;

  @Field(() => String)
  currentAudienceSize: String;

  @Field(() => String)
  expectRaiseAmount: String;


}
