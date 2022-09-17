import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
  }


  async activeEmail(email:string): Promise<boolean> {
    const user: User = await this.userRepository.findOneByOrFail({ email });
    user.isEmailVerified = true;
    await this.userRepository.save(user);
    return true;
  }
}
