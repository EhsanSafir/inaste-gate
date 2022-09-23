import { InputType, Field, OmitType } from "@nestjs/graphql";
import { Startup } from "../entities/startup.entity";
import { Column } from "typeorm";

@InputType()
export class CreateStartupInput extends OmitType(Startup, ["id",'confirmStatus','createdAt','modifiedAt','user','startupsApply','isActive','isTrending'] as const, InputType) {
  @Field(() => String,{nullable:true})
  @Column(
    {nullable:true}
  )
  userId:string

}
