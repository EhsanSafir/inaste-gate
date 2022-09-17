import { Injectable } from '@nestjs/common';
import { CreateInvestorInput } from './dto/create-investor.input';
import { UpdateInvestorInput } from './dto/update-investor.input';

@Injectable()
export class InvestorService {
  create(createInvestorInput: CreateInvestorInput) {
    return 'This action adds a new investor';
  }

  findAll() {
    return `This action returns all investor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} investor`;
  }

  update(id: number, updateInvestorInput: UpdateInvestorInput) {
    return `This action updates a #${id} investor`;
  }

  remove(id: number) {
    return `This action removes a #${id} investor`;
  }
}
