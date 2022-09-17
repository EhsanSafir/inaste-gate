import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvestorService } from './investor.service';
import { Investor } from './entities/investor.entity';
import { CreateInvestorInput } from './dto/create-investor.input';
import { UpdateInvestorInput } from './dto/update-investor.input';

@Resolver(() => Investor)
export class InvestorResolver {
  constructor(private readonly investorService: InvestorService) {}

  @Mutation(() => Investor)
  createInvestor(@Args('createInvestorInput') createInvestorInput: CreateInvestorInput) {
    return this.investorService.create(createInvestorInput);
  }

  @Query(() => [Investor], { name: 'investor' })
  findAll() {
    return this.investorService.findAll();
  }

  @Query(() => Investor, { name: 'investor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.investorService.findOne(id);
  }

  @Mutation(() => Investor)
  updateInvestor(@Args('updateInvestorInput') updateInvestorInput: UpdateInvestorInput) {
    return this.investorService.update(updateInvestorInput.id, updateInvestorInput);
  }

  @Mutation(() => Investor)
  removeInvestor(@Args('id', { type: () => Int }) id: number) {
    return this.investorService.remove(id);
  }
}
