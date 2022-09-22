import { ObjectType, Field } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class InvestedStartup {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  id: number;


  @Field(() => String)
  @Column()
  investorId: String;

  @Field(() => String)
  @Column()
  startupId: String;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;  // TOD create date time field // TOD auto updated created time // TOD auto updated modified  time


}
