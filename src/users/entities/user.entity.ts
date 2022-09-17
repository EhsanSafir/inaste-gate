import { ObjectType, Field } from "@nestjs/graphql";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { StartupsApply } from "../../startups-apply/entities/startups-apply.entity";
import { Exclude } from "class-transformer";
import { Startup } from "../../startups/entities/startup.entity";
import { Investor } from "../../investor/entities/investor.entity";

@ObjectType()
@Entity({ name: "users" })  // TODO make index firstname and email
export class User {

  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Field(() => String)
  @Column({ name: "first_name" })
  firstName: string;

  @Field(() => String)
  @Column({ name: "last_name" })
  lastName: string;
  // TODO make email unique
  @Field(() => String)
  @Column()
  email: string;

  @Field(() => Boolean)
  @Column({ name: "is_email_verified", default: false })
  isEmailVerified: boolean;

  @Field(() => String)
  @Column()
  @Exclude()
  password: string;
  @OneToMany(
    () => StartupsApply, StartupsApply => StartupsApply.user
  )
  @Field(type => [StartupsApply], { nullable: true })
  appliedStartup?: StartupsApply[];

  @OneToMany(
    () => Startup, Startup => Startup.user
  )
  @Field(type => [Startup], { nullable: true })
  startup?: Startup[];

  @OneToOne(() => Investor)
  investorProfile?: Investor;
}
