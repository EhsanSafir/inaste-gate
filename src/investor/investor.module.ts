import { Module } from "@nestjs/common";
import { InvestorService } from "./investor.service";
import { InvestorResolver } from "./investor.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Investor } from "./entities/investor.entity";
import { InvestedStartup } from "./entities/invested-startup.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Investor]),
    TypeOrmModule.forFeature([InvestedStartup]),
  ],
  providers: [InvestorResolver, InvestorService]
})
export class InvestorModule {
}
