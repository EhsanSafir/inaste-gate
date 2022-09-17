import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class PasswordUtils {

  async generateHash(password: string) {
    const saltOrRounds =4;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async generateSalt() {
    return await bcrypt.genSalt();
  }

  async isMatch(password: string, hash: string) {
    return await bcrypt.compare(password, hash);

  }
}
