import {  Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RefreshTokenResponse {
  @Field(() => String)
  accessToken: string;
  @Field(() => String,{defaultValue:null,nullable:true})
  refreshToken?: string;
}
