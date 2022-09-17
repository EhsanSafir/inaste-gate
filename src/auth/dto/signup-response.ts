import {  Field, ObjectType } from "@nestjs/graphql";
import { User } from "../../users/entities/user.entity";

@ObjectType()
export class SignupResponse {
  @Field(() => String)
  id: number;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  userName: string;

  @Field(() => String)
  email: string;
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
