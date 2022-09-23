import {  Field, ObjectType } from "@nestjs/graphql";
import { User } from "../../users/entities/user.entity";
import { RefreshTokenResponse } from "./refresh-token-response";

@ObjectType()
export class LoginResponse extends RefreshTokenResponse{

  @Field(() => User)
  user : User
}
