import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { PasswordUtils } from "../utils/password.utils";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private passwordUtils: PasswordUtils,
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
      throw  new Error("User does not exist");
    }

    return null;
  }

  async activeEmail(email:string): Promise<boolean> {
    const user: User = await this.userRepository.findOneByOrFail({ email });
    user.isEmailVerified = true;
    await this.userRepository.save(user);
    return true;
  }
}
