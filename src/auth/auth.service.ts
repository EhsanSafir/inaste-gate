import { Injectable } from "@nestjs/common";
import { SignupAuthInput } from "./dto/signup-auth.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MailerService } from "@nestjs-modules/mailer";
import { User } from "../users/entities/user.entity";
import { PasswordUtils } from "../common/utils/password.utils";
import { JwtUtils } from "../common/utils/jwt.utils";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private passwordUtils: PasswordUtils,
    private maileService: MailerService,
    private jwtUtils: JwtUtils
  ) {
  }

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const userInstance: User = await this.userRepository.findOneByOrFail({
        email: email,
        isEmailVerified: true
      });
      const isRightPassword = await this.passwordUtils.isMatch(password, userInstance.password);
      if (userInstance && isRightPassword) {
        const { password, ...result } = userInstance;
        return result;
      }
    } catch (e) {
      throw  new Error('User does not exist')
    }

    return null;
  }

  async signUp(signupAuthInput: SignupAuthInput, hostUrl: string) {
    const token: string = await this.jwtUtils.signConfirmMaile(signupAuthInput.email);
    signupAuthInput.password = await this.passwordUtils.generateHash(signupAuthInput.password);

    const user: User = this.userRepository.create(signupAuthInput);
    await this.maileService.sendMail({
      to: signupAuthInput.email,
      from: "noreplay.earlybird@gmail.com",
      subject: "confirm",
      template: "email-confirm",
      context: {
        data: {
          url: `${hostUrl}/auth/confirm/?token=${token}`
        }
      }
    });
    return this.userRepository.save(user);

  }

  async createAccessToken(email: string, userId: string) {
    return await this.jwtUtils.signAccessToken(email, userId);
  }

  async createRefreshToken(email: string, userId: string) {
    return await this.jwtUtils.signRefreshToken(email, userId);
  }

  async loginIn(userInstance: User) {
    const accessToken: string = await this.createAccessToken(userInstance.email, userInstance.id);
    const refreshToken: string = await this.createRefreshToken(userInstance.email, userInstance.id);
    const { password, ...result } = userInstance;
    return {
      accessToken,
      refreshToken,
      user: result
    };
  }

  async activeEmail(email:string): Promise<boolean> {
    const user: User = await this.userRepository.findOneByOrFail({ email });
    user.isEmailVerified = true;
    await this.userRepository.save(user);
    return true;
  }
}
