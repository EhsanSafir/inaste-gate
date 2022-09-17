import { Injectable } from "@nestjs/common";
import { CreateStartupsApplyInput } from "./dto/create-startups-apply.input";
import { InjectRepository } from "@nestjs/typeorm";
import { StartupsApply } from "./entities/startups-apply.entity";
import { Repository } from "typeorm";
import { UsersService } from "../users/users.service";

@Injectable()
export class StartupsApplyService {
  constructor(
    @InjectRepository(StartupsApply) private startupsApplyRepository: Repository<StartupsApply>,
    private userService:UsersService
  ) {}

  create(createStartupsApplyInput: CreateStartupsApplyInput,userId:string) {
    const startupApplyInstance = this.startupsApplyRepository.create(createStartupsApplyInput);
    startupApplyInstance.userId = userId
    return this.startupsApplyRepository.save(startupApplyInstance);
  }
  findOwnerUser(userId:string){
    return this.userService.findOneById(userId)
  }
  findAll() {
    return this.startupsApplyRepository.find()
  }

  findAllByUser(userId:string) {
    return this.startupsApplyRepository.findBy({userId})
  }

  findOne(id: string) {
    return  this.startupsApplyRepository.findOneByOrFail({id})
  }

  // update(id: number, updateStartupsApplyInput: UpdateStartupsApplyInput) {
  //   return `This action updates a #${id} startupsApply`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} startupsApply`;
  // }
}
