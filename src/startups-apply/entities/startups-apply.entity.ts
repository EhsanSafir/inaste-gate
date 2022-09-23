import { ObjectType, Field } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ConfirmStatusEnum } from "../../common/enums/confirm-status.enum";
import { IndustryTypeEnum } from "../../common/enums/industry-type.enum";
import { User } from "../../users/entities/user.entity";
import { Startup } from "../../startups/entities/startup.entity";

@ObjectType()
@Entity()
export class StartupsApply {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String)
  @Column({ type: "text" ,nullable:true})
  startupName: String;

  @Field(() => String)
  @Column({ type: "text" })
  website: String;

  @Field(() => String)
  @Column({ type: "text" })
  yourTitle: String;

  @Field(() => IndustryTypeEnum)
  @Column({ type: "text" })
  industryType: String;

  @Field(() => String)
  @Column({ type: "text" })
  summery: String;

  @Field(() => String)
  @Column({ type: "text" })
  companyAddress: String;

  @Field(() => Boolean)
  @Column({ type: "boolean" })
  hasProductInMarket: Boolean;

  @Field(() => Boolean)
  @Column({ type: "boolean" })
  isMakingMoney: Boolean;

  @Field(() => String)
  @Column({ type: "text" })
  traction: String;

  @Field(() => String)
  @Column({ type: "text" })
  totalRaisedUntilNow: String;

  @Field(() => String)
  @Column({ type: "text" })
  pastProject: String;

  @Field(() => String)
  @Column({ type: "text" })
  currentAudienceSize: String;

  @Field(() => String)
  @Column({ type: "text" })
  expectRaiseAmount: String;

  @Field(() => ConfirmStatusEnum)
  @Column({
    type: "enum",
    enum: ConfirmStatusEnum,
    default: ConfirmStatusEnum.PENDING
  })
  confirmStatus: String;

  @Field(() => User)
  @ManyToOne(type => User,user=>user.appliedStartup)
  user:User[]

  @Field(() => String)
  @Column(
    {nullable:true}
  )
  userId:string

  @Field(() => Startup)
  @OneToOne(type => Startup,Startup=>Startup.startupsApply)
  startup?:Startup

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;  // TOD create date time field // TOD auto updated created time // TOD auto updated modified  time

}
