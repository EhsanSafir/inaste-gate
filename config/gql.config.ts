import { Injectable } from "@nestjs/common";
import { GqlOptionsFactory } from "@nestjs/graphql";
import {  ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { JwtUtils } from "../src/utils/jwt.utils";

const extractJwtFromBearerToken = (authorizationHeader) => {
  const AUTH_TYPE = "Bearer";
  let authToken = null;
  if (authorizationHeader.startsWith(`${AUTH_TYPE} `)) {
    authToken = authorizationHeader.split(" ")[1];
  } else {
    throw new Error("Authorization Header  is not valid");
  }
  return authToken;
};

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private jwtUtils:JwtUtils) {
  }
  createGqlOptions(): ApolloDriverConfig {
    return {
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      playground: true,
      installSubscriptionHandlers: true,
      subscriptions: {
        "subscriptions-transport-ws": {
          onConnect: (connectionParams) => {
            const authorizationHeader = connectionParams.Authorization;
            const authToken = extractJwtFromBearerToken(authorizationHeader);
            // this.jwtUtils.verifyAsyncToken()
            // if (!isValid(authToken)) {
            //   throw new Error('Token is not valid');
            // }
            console.log(authToken);
            // extract user information from token
            // const user = parseToken(authToken);
            const testUser = { email: "samal", userId: "asdasd" };
            // return user info to add them to the context later
            return { ...testUser };
          }
        }
      }
    };
  }
}
