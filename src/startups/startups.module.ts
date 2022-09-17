import { Module } from '@nestjs/common';
import { StartupsService } from './startups.service';
import { StartupsResolver } from './startups.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Startup } from "./entities/startup.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Startup])],
  providers: [StartupsResolver, StartupsService]
})
export class StartupsModule {}
