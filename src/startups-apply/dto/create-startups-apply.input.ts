import { InputType, Field, OmitType } from "@nestjs/graphql";
import { StartupsApply } from "../entities/startups-apply.entity";
import { Column } from "typeorm";

@InputType()
export class CreateStartupsApplyInput extends OmitType(StartupsApply, ["id", "user", "startup",'confirmStatus','createdAt'] as const, InputType) {

  @Field(() => String,{nullable:true})
  @Column(
    {nullable:true}
  )
  userId:string
}
