import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { StartupsApplyService } from "./startups-apply.service";
import { StartupsApply } from "./entities/startups-apply.entity";
import { CreateStartupsApplyInput } from "./dto/create-startups-apply.input";
import { User } from "../users/entities/user.entity";
import { CurrentUser } from "../common/decorator/current-user.decorator";
import { UserPayloadTypes } from "../users/types/user-payload.types";

@Resolver(() => StartupsApply)
export class StartupsApplyResolver {
  constructor(private readonly startupsApplyService: StartupsApplyService) {
  }

  @Mutation(() => StartupsApply)
  createStartupApply(@Args("createStartupsApplyInput") createStartupsApplyInput: CreateStartupsApplyInput, @CurrentUser() currentUser: UserPayloadTypes) {
    return this.startupsApplyService.create(createStartupsApplyInput, currentUser.userId);
  }


  @Query(() => StartupsApply, { name: "startupsApplyById" })
  async findOne(@Args("id", { type: () => String }) id: string, @CurrentUser() currentUser: UserPayloadTypes) {
    try {
      return await this.startupsApplyService.findOne(id, currentUser.userId);
    } catch (e) {
      throw new Error("object does not exist or unauthorized object ");
    }
  }

  @Query(() => [StartupsApply], { name: "startupApplyByCurrentUser" })
  findAllByUser(@CurrentUser() currentUser: UserPayloadTypes) {
    return this.startupsApplyService.findAllByUser(currentUser.userId);
  }


  @ResolveField(() => User)
  user(@Parent() parent: StartupsApply): Promise<User> {
    return this.startupsApplyService.findOwnerUser(parent.userId);
  }

}
