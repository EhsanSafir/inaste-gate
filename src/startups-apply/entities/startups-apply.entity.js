"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StartupsApply = void 0;
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var confirm_status_enum_1 = require("../../common/enums/confirm-status.enum");
var industry_type_enum_1 = require("../../common/enums/industry-type.enum");
var user_entity_1 = require("../../users/entities/user.entity");
var StartupsApply = /** @class */ (function () {
    function StartupsApply() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
    ], StartupsApply.prototype, "id");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)({ type: "text" })
    ], StartupsApply.prototype, "companyName");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)({ type: "text" })
    ], StartupsApply.prototype, "yourTitle");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)({ type: "text" })
    ], StartupsApply.prototype, "website");
    __decorate([
        (0, graphql_1.Field)(function () { return industry_type_enum_1.IndustryTypeEnum; }),
        (0, typeorm_1.Column)({ type: "text" })
    ], StartupsApply.prototype, "industryType");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)({ type: "text" })
    ], StartupsApply.prototype, "summery");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)({ type: "text" })
    ], StartupsApply.prototype, "companyAddress");
    __decorate([
        (0, graphql_1.Field)(function () { return Boolean; }),
        (0, typeorm_1.Column)({ type: "boolean" })
    ], StartupsApply.prototype, "hasProductInMarket");
    __decorate([
        (0, graphql_1.Field)(function () { return Boolean; }),
        (0, typeorm_1.Column)({ type: "boolean" })
    ], StartupsApply.prototype, "isMakingMoney");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)({ type: "text" })
    ], StartupsApply.prototype, "traction");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)({ type: "text" })
    ], StartupsApply.prototype, "totalRaisedUntilNow");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)({ type: "text" })
    ], StartupsApply.prototype, "pastProject");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)({ type: "text" })
    ], StartupsApply.prototype, "currentAudienceSize");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)({ type: "text" })
    ], StartupsApply.prototype, "expectRaiseAmount");
    __decorate([
        (0, graphql_1.Field)(function () { return confirm_status_enum_1.ConfirmStatusEnum; }),
        (0, typeorm_1.Column)({
            type: "enum",
            "enum": confirm_status_enum_1.ConfirmStatusEnum,
            "default": confirm_status_enum_1.ConfirmStatusEnum.PENDING
        })
    ], StartupsApply.prototype, "confirmStatus");
    __decorate([
        (0, graphql_1.Field)(function () { return user_entity_1.User; }),
        (0, typeorm_1.ManyToOne)(function (type) { return user_entity_1.User; }, function (user) { return user.appliedStartup; })
    ], StartupsApply.prototype, "user");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)({ nullable: true })
    ], StartupsApply.prototype, "userId");
    StartupsApply = __decorate([
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], StartupsApply);
    return StartupsApply;
}());
exports.StartupsApply = StartupsApply;
