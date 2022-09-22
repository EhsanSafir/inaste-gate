import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { StartupsService } from "./startups.service";
import { Startup } from "./entities/startup.entity";
import { CreateStartupInput } from "./dto/create-startup.input";
import { UpdateStartupInput } from "./dto/update-startup.input";
import { CurrentUser } from "../common/decorator/current-user.decorator";
import { UserPayloadTypes } from "../users/types/user-payload.types";

@Resolver(() => Startup)
export class StartupsResolver {
  constructor(private readonly startupsService: StartupsService) {
  }

  @Mutation(() => Startup)
  createStartup(@Args("createStartupInput") createStartupInput: CreateStartupInput, @CurrentUser() currentUser: UserPayloadTypes) {
    return this.startupsService.create(createStartupInput, currentUser.userId); // Todo  handel duplicate record
  }


  @Query(() => [Startup], { name: "allStartups" })
  findAll() {
    return this.startupsService.findAll();
  }

  @Query(() => [Startup], { name: "allStartupsByCurrentUser" })
  findAllByCurrentUser(@CurrentUser() currentUser: UserPayloadTypes) {
    // TODO async all function
    return this.startupsService.findAllByUser(currentUser.userId);
  }

  @Query(() => Startup, { name: "startupById" })
  findOne(@Args("id", { type: () => Int }) id: string) {
    return this.startupsService.findOne(id);
  }

  @Mutation(() => Startup)
  updateStartup(@Args("updateStartupInput") updateStartupInput: UpdateStartupInput, @CurrentUser() currentUser: UserPayloadTypes) {
    //TODO check is owner of this startup
    return this.startupsService.update(updateStartupInput.id, currentUser.userId, updateStartupInput);
  }

  @Mutation(() => Startup, { name: "inactivateStartup" })
  inactivateStartup(@Args("id", { type: () => String }) id: string) {
    return this.startupsService.inactivate(id);
  }

  @Mutation(() => Startup, { name: "inactivateStartup" })
  activeStartup(@Args("id", { type: () => String }) id: string) {
    return this.startupsService.active(id);
  }
}
