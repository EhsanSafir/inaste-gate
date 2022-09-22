import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvestorService } from './investor.service';
import { Investor } from './entities/investor.entity';
import { CreateInvestorInput } from './dto/create-investor.input';
import { CurrentUser } from "../common/decorator/current-user.decorator";
import { UserPayloadTypes } from "../users/types/user-payload.types";

@Resolver(() => Investor)
export class InvestorResolver {
  constructor(private readonly investorService: InvestorService) {}

  @Mutation(() => Investor)
  createInvestorProfile(@Args('createInvestorInput') createInvestorInput: CreateInvestorInput,@CurrentUser() currentUser:UserPayloadTypes) {
    createInvestorInput.userId = currentUser.userId
    return this.investorService.create(createInvestorInput);
  }

  @Query(() => Boolean, )
  hasInvestorProfile(@CurrentUser() currentUser:UserPayloadTypes) {
    return this.investorService.hasInvestorProfile(currentUser.userId)
  }


  @Query(() => Investor )
  investorProfile(@CurrentUser() currentUser:UserPayloadTypes) {
    return this.investorService.findOneByUserId(currentUser.userId);
  }


}
