import { Module } from "@nestjs/common";
import { StartupsApplyService } from "./startups-apply.service";
import { StartupsApplyResolver } from "./startups-apply.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StartupsApply } from "./entities/startups-apply.entity";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [TypeOrmModule.forFeature([StartupsApply]),UsersModule],
  providers: [StartupsApplyResolver, StartupsApplyService]
})
export class StartupsApplyModule {
}
