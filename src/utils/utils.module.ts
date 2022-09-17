import { Global, Module } from "@nestjs/common";
import { PasswordUtils } from "./password.utils";

@Global()
@Module({
  imports:[
  ],
  providers: [PasswordUtils],
  exports:[PasswordUtils]
})
export class UtilsModule {
}
