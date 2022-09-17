import { ObjectType, Field } from "@nestjs/graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { ConfirmStatusEnum } from "../../common/enums/confirm-status.enum";
import { User } from "../../users/entities/user.entity";
import { StartupsApply } from "../../startups-apply/entities/startups-apply.entity";

@ObjectType()
@Entity()
export class Startup {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: string;


  @Field(() => ConfirmStatusEnum)
  @Column({
    type: "enum",
    enum: ConfirmStatusEnum,
    default: ConfirmStatusEnum.PENDING
  })
  confirmStatus: String;

  @Field(() => Boolean)
  @Column({default:false})
  isTrending: Boolean;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;  // TOD create date time field // TOD auto updated created time // TOD auto updated modified  time

  @Field(() => Date)
  @UpdateDateColumn({nullable:true})
  modifiedAt: Date;


  @Field(() => String)
  @Column()
  Name: string;


  @Field(() => String)
  @Column()
  subtitle: string;

  @Field(() => String)
  @Column()
  summery: string;


  @Field(() => String)
  @Column()
  details: string;

  @Field(() => String)
  @Column()
  foundedOn: string;

  @Field(() => String)
  @Column()
  website: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  location: string;


  @Field(() => String)
  @Column()
  investmentMin: string;


  @Field(() => String)
  @Column()
  investmentTarget: string;

  @Field(() => Boolean)
  @Column({default:true})
  isActive: boolean;


  @Field(() => String)
  @Column()
  closingDate: string;


  @Field(() => User)
  @ManyToOne(type => User, user => user.startup)
  user: User[];

  @Field(() => String)
  @Column(
    { nullable: true }
  )
  userId: string;

  @Field(() => StartupsApply)
  @OneToOne(type => StartupsApply, StartupsApply => StartupsApply.startup)
  @JoinColumn()
  startupsApply: StartupsApply;

  @Field(() => String)
  @Column(
    { nullable: true }
  )
  startupsApplyId: string;
}
