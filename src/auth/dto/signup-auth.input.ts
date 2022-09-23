import { InputType, PickType } from "@nestjs/graphql";
import { User } from "../../users/entities/user.entity";

@InputType()
export class SignupAuthInput extends PickType(User, [  'firstName','lastName','email','password'] as const,InputType) {

}
