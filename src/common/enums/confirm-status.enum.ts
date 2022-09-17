import { registerEnumType } from "@nestjs/graphql";

export enum ConfirmStatusEnum {
  APPROVED = "approved",
  PENDING = "pending",
  REJECTED = "rejected",
}

registerEnumType(ConfirmStatusEnum, {
  name: "ConfirmStatusEnum"
});