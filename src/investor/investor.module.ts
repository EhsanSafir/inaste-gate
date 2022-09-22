import { Module } from '@nestjs/common';
import { InvestorService } from './investor.service';
import { InvestorResolver } from './investor.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Investor } from "./entities/investor.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Investor])],
  providers: [InvestorResolver, InvestorService]
})
export class InvestorModule {}
