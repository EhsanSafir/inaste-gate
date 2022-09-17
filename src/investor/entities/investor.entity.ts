import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ConfirmStatusEnum } from "../../common/enums/confirm-status.enum";
import { User } from "../../users/entities/user.entity";

@ObjectType()
@Entity()
export class Investor {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: number;


  @Field(() => Int)
  @Column()
  age: number;

  @Field(() => String)
  @Column()
  investmentEmail: String;


  @Field(() => String)
  @Column()
  investmentField: String;
  // TODO investment field
  @Field(() => Int)
  @Column()
  totalAnnualIncome: number;

  @Field(() => String)
  @Column()
  investContext: number;


  @Field(() => String)
  @Column()
  employCount: number;

  @Field(() => String)
  @Column()
  organizationalChat: number;

  @Field(() => String)
  @Column()
  previewExp: number;


  @Field(() => ConfirmStatusEnum)
  @Column({
    type: "enum",
    enum: ConfirmStatusEnum,
    default: ConfirmStatusEnum.PENDING
  })
  confirmStatus: String;
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
