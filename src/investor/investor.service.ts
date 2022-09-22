import { Injectable } from '@nestjs/common';
import { CreateInvestorInput } from './dto/create-investor.input';
import { InjectRepository } from "@nestjs/typeorm";
import { Investor } from "./entities/investor.entity";
import { Repository } from "typeorm";

@Injectable()
export class InvestorService {
  constructor(@InjectRepository(Investor) private investorRepository: Repository<Investor>) {}
  create(createInvestorInput: CreateInvestorInput) {
    const createdInstance = this.investorRepository.create(createInvestorInput)
    return this.investorRepository.save(createdInstance)
  }

  findAll() {
    return `This action returns all investor`;
  }

  findOneByUserId(userId: string) {
    const profileInstance = this.investorRepository.findOneByOrFail({userId});
    console.log(profileInstance)
    return profileInstance
  }

  async hasInvestorProfile(userId){
    const profileInstance = await this.investorRepository.findOneBy({userId});
    console.log(profileInstance)
    return !!profileInstance;
  }
  remove(id: number) {
    return `This action removes a #${id} investor`;
  }
}
