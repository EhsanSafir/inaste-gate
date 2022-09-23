import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InvestorService } from './investor.service';
import { Investor } from './entities/investor.entity';
import { CreateInvestorInput } from './dto/create-investor.input';
import { CurrentUser } from "../common/decorator/current-user.decorator";
import { UserPayloadTypes } from "../users/types/user-payload.types";
import { InvestedStartup } from "./entities/invested-startup.entity";
import { StartupIdArgs } from "./args/startup-id.args";

@Resolver(() => Investor)
export class InvestorResolver {
  constructor(private readonly investorService: InvestorService) {}

  @Mutation(() => Investor)
  createInvestorProfile(@Args('createInvestorInput') createInvestorInput: CreateInvestorInput,@CurrentUser() currentUser:UserPayloadTypes) {
    createInvestorInput.userId = currentUser.userId
    return this.investorService.create(createInvestorInput);
  }

  @Mutation(() => InvestedStartup)
  createInvestorParticipant(@Args() args: StartupIdArgs,@CurrentUser() currentUser:UserPayloadTypes) {
    return this.investorService.createInvestorParticipant(args.startup,currentUser.userId)
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
