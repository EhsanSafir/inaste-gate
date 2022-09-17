import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { StartupsApplyService } from './startups-apply.service';
import { StartupsApply } from './entities/startups-apply.entity';
import { CreateStartupsApplyInput } from './dto/create-startups-apply.input';
import { User } from "../users/entities/user.entity";
import { CurrentUser } from "../common/decorator/current-user.decorator";
import { UserPayloadTypes } from "../users/types/user-payload.types";

@Resolver(() => StartupsApply)
export class StartupsApplyResolver {
  constructor(private readonly startupsApplyService: StartupsApplyService) {}

  @Mutation(() => StartupsApply)
  createStartupsApply(@Args('createStartupsApplyInput') createStartupsApplyInput: CreateStartupsApplyInput,@CurrentUser() currentUser:UserPayloadTypes) {
    return this.startupsApplyService.create(createStartupsApplyInput,currentUser.userId);
  }

  @Query(() => [StartupsApply], { name: 'startupsApply' })
  findAll() {
    return this.startupsApplyService.findAll(); //TODO Paginate response
  }

  @Query(() => StartupsApply, { name: 'startupsApplyById' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.startupsApplyService.findOne(id);
  }

  @Query(() => [StartupsApply], { name: 'startupsApplyByCurrentUser' })
  findAllByUser(@CurrentUser() currentUser:UserPayloadTypes) {
    return this.startupsApplyService.findAllByUser(currentUser.userId);
  }


  @ResolveField(()=>User)
  user(@Parent() parent:StartupsApply):Promise<User> {
    return this.startupsApplyService.findOwnerUser(parent.userId)
  }


  // @Mutation(() => StartupsApply)
  // updateStartupsApply(@Args('updateStartupsApplyInput') updateStartupsApplyInput: UpdateStartupsApplyInput) {
  //   return this.startupsApplyService.update(updateStartupsApplyInput.id, updateStartupsApplyInput);
  // }

  // @Mutation(() => StartupsApply)
  // removeStartupsApply(@Args('id', { type: () => Int }) id: number) {
  //   return this.startupsApplyService.remove(id);
  // }
}
