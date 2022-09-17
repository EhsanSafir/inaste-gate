import { registerEnumType } from "@nestjs/graphql";

export enum IndustryTypeEnum {
  MEDIA = "media",
  FASHION = "fashion",
  HEALTH = "health",
  SERVICE = "service",
  FOOD = "food",
  ENERGY = "energy",
}

registerEnumType(IndustryTypeEnum, {
  name: "IndustryTypeEnum"
});