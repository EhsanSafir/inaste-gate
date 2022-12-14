import { Injectable } from "@nestjs/common";
import { GqlOptionsFactory } from "@nestjs/graphql";
import {  ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { JwtUtils } from "../src/common/utils/jwt.utils";



@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private jwtUtils:JwtUtils) {
  }
  createGqlOptions(): ApolloDriverConfig {
    return {
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      playground: true,
      installSubscriptionHandlers: true,
      subscriptions: {
        "subscriptions-transport-ws": {
          onConnect: (connectionParams:any) => {
            const authorizationHeader = connectionParams.Authorization;
            const authToken = this.jwtUtils.extractJwtFromBearerToken(authorizationHeader);
            const payload = this.jwtUtils.verifyToken(authToken)
            const user = (({ email, userId }) => ({ email, userId }))(payload);
            return { user ,
            };
          }
        }
      },
      context: ({ req, res, payload, connection }) => ({
        req,
        res,
        payload,
        connection,
      }),
    };
  }
}
