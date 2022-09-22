import { ObjectType, Field } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Startup } from "../../startups/entities/startup.entity";

@ObjectType()
@Entity()
export class InvestedStartup {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: number;



  @Field(() => User)
  @ManyToOne(type => User)
  investor: User;

  @Field(() => String)
  @Column()
  investorId: String;


  @Field(() => Startup)
  @ManyToOne(type => Startup)
  startup: Startup;

  @Field(() => String)
  @Column()
  startupId: String;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;  // TOD create date time field // TOD auto updated created time // TOD auto updated modified  time


}
