import { ObjectType, Field } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@ObjectType()
@Entity()
export class Message {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: number;


  @Field(() => String)
  @Column()
  subject: string;

  @Field(() => String)
  @Column()
  body: string;


  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;  // TOD create date time field // TOD auto updated created time // TOD auto updated modified  time

  @Field(() => User)
  @ManyToOne(type => User)
  sender: User[];

  @Field(() => String)
  @Column(
    { nullable: true }
  )
  senderId: string;


  @Field(() => User)
  @ManyToOne(type => User)
  receiver: User[];


  @Field(() => String)
  @Column(
    { nullable: true }
  )
  receiverId: string;


}
