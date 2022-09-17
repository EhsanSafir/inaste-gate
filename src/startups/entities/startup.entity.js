"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Startup = void 0;
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var confirm_status_enum_1 = require("../../common/enums/confirm-status.enum");
var user_entity_1 = require("../../users/entities/user.entity");
var Startup = /** @class */ (function () {
    function Startup() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
    ], Startup.prototype, "id");
    __decorate([
        (0, graphql_1.Field)(function () { return confirm_status_enum_1.ConfirmStatusEnum; }),
        (0, typeorm_1.Column)({
            type: "enum",
            "enum": confirm_status_enum_1.ConfirmStatusEnum,
            "default": confirm_status_enum_1.ConfirmStatusEnum.PENDING
        })
    ], Startup.prototype, "confirmStatus");
    __decorate([
        (0, graphql_1.Field)(function () { return Boolean; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "isTrending");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "createdAt");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "modifiedAt");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "Name");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "subtitle");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "Summery");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "details");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "foundedOn");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "website");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "email");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "location");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "investmentMin");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "investmentTarget");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)()
    ], Startup.prototype, "closingDate");
    __decorate([
        (0, graphql_1.Field)(function () { return user_entity_1.User; }),
        (0, typeorm_1.ManyToOne)(function (type) { return user_entity_1.User; }, function (user) { return user.startup; })
    ], Startup.prototype, "user");
    __decorate([
        (0, graphql_1.Field)(function () { return String; }),
        (0, typeorm_1.Column)({ nullable: true })
    ], Startup.prototype, "userId");
    Startup = __decorate([
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], Startup);
    return Startup;
}());
exports.Startup = Startup;
