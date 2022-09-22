import { Injectable } from "@nestjs/common";
import { CreateInvestorInput } from "./dto/create-investor.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Investor } from "./entities/investor.entity";
import { Repository } from "typeorm";
import { InvestedStartup } from "./entities/invested-startup.entity";

@Injectable()
export class InvestorService {
  constructor(
    @InjectRepository(Investor) private investorRepository: Repository<Investor>,
    @InjectRepository(InvestedStartup) private investedStartupRepository: Repository<InvestedStartup>
  ) {
  }

  create(createInvestorInput: CreateInvestorInput) {
    const createdInstance = this.investorRepository.create(createInvestorInput);
    return this.investorRepository.save(createdInstance);
  }

  findOneByUserId(userId: string) {
    const profileInstance = this.investorRepository.findOneByOrFail({ userId });
    console.log(profileInstance);
    return profileInstance;
  }

  async hasInvestorProfile(userId) {
    const profileInstance = await this.investorRepository.findOneBy({ userId });
    console.log(profileInstance);
    return !!profileInstance;
  }

  async createInvestorParticipant(startupId: string, investorId) {
    return this.investedStartupRepository.save({ startupId, investorId });
  }
}
