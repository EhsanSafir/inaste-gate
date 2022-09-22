import { Injectable } from "@nestjs/common";
import { CreateStartupInput } from "./dto/create-startup.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Startup } from "./entities/startup.entity";
import { Repository } from "typeorm";
import { UpdateStartupInput } from "./dto/update-startup.input";

@Injectable()
export class StartupsService {
  constructor(@InjectRepository(Startup) private startupRepository: Repository<Startup>) {
  }

  create(createStartupInput: CreateStartupInput, userId: string) {
    const startupInstance = this.startupRepository.create(createStartupInput);
    startupInstance.userId = userId;
    return this.startupRepository.save(startupInstance);
  }

  findAll() {
    return this.startupRepository.find();
  }

  findAllByUser(userId: string) {
    return this.startupRepository.findBy({ userId });
  }

  findOne(id: string) {
    return this.startupRepository.findOneByOrFail({ id });
  }

  async update(id: string,userId, updateStartupInput: UpdateStartupInput) {
    await this.startupRepository.update({ id ,userId}, updateStartupInput)
    return this.findOne(id)
  }

  async inactivate(id: string) {
    await this.startupRepository.update({ id }, {isActive:false})
    return this.findOne(id)
  }

  async active(id: string) {
    await this.startupRepository.update({ id }, {isActive:true})
    return this.findOne(id)
  }
}
