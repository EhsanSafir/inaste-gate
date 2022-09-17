import { Module } from '@nestjs/common';
import { InvestorService } from './investor.service';
import { InvestorResolver } from './investor.resolver';

@Module({
  providers: [InvestorResolver, InvestorService]
})
export class InvestorModule {}
