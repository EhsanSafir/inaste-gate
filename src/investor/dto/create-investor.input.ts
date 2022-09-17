import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInvestorInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
