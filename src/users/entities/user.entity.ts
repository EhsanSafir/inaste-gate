import { ObjectType, Field } from "@nestjs/graphql";
import { Column, Entity, Index,PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

@ObjectType()
@Entity({ name: "users" })
export class User {

  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Field(() => String)
  @Column({ name: "first_name" })
  @Index()
  firstName: string;

  @Field(() => String)
  @Column({ name: "last_name" })
  @Index()
  lastName: string;

  @Field(() => String)
  @Column()
  @Index()
  email: string;   // TODO make email unique

  @Field(() => Boolean)
  @Column({ name: "is_email_verified", default: false })
  isEmailVerified: boolean;

  @Field(() => String)
  @Column()
  @Exclude()
  password: string;
}
