import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStartupInput {



  @Field(() => String)
  Name: string;


  @Field(() => String)
  subtitle: string;

  @Field(() => String)
  summery: string;


  @Field(() => String)
  details: string;

  @Field(() => String)
  foundedOn: string;

  @Field(() => String)
  website: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  location: string;


  @Field(() => String)
  investmentMin: string;


  @Field(() => String)
  investmentTarget: string;


  @Field(() => String)
  closingDate: string;
   // TODO updated closing-data field `s type
  @Field(() => String)
  startupsApplyId: string;

}
