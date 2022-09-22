import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { SignupAuthInput } from "./dto/signup-auth.input";
import { LoginResponse } from "./dto/login-response";
import { SignupResponse } from "./dto/signup-response";
import { LoginInput } from "./dto/login-input";
import { Inject, UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "./gql-auth.guard";
import { RefreshTokenResponse } from "./dto/refresh-token-response";
import { User } from "../users/entities/user.entity";
import { Public } from "../common/decorator/public.decorator";
import { HostUrl } from "../common/decorator/host-url.decorator";
import { CurrentUser } from "../common/decorator/current-user.decorator";
import { TokenPayload } from "./types/token-payload.type";
import { RefreshTokenArgs } from "./args/refresh-token.args";
import { PubSubEngine } from "graphql-subscriptions";
import { JwtUtils } from "../common/utils/jwt.utils";
import { UserPayloadTypes } from "../users/types/user-payload.types";

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService, private jwtUtils: JwtUtils,
  ) {
  }

  @Mutation(() => SignupResponse)
  @Public()
  async signUp(@Args("signupAuthInput") signupAuthInput: SignupAuthInput, @HostUrl() hostUrl: string) {
    return await this.authService.signUp(signupAuthInput, hostUrl);
  }

  @Mutation(() => LoginResponse)
  @Public()
  @UseGuards(GqlAuthGuard)
  async logIn(@Args("loginInput") loginInput: LoginInput, @CurrentUser() user: User) {
    return await this.authService.loginIn(user);
  }


  @Mutation(() => RefreshTokenResponse)
  @Public()
  async refreshToken(@Args() args: RefreshTokenArgs) {
    const payload: TokenPayload = await this.jwtUtils.verifyAsyncToken(args.token);
    const accessToken = await this.authService.createAccessToken(payload.email, payload.userId);
    return {
      accessToken
    };
  }

  @Query(() => User)
  async me(@CurrentUser() currentUser:UserPayloadTypes) {
    return  this.authService.userById(currentUser.userId)
  }


}
