"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateStartupInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var confirm_status_enum_1 = require("../../common/enums/confirm-status.enum");
var CreateStartupInput = /** @class */ (function () {
    function CreateStartupInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return confirm_status_enum_1.ConfirmStatusEnum; })
    ], CreateStartupInput.prototype, "confirmStatus");
    __decorate([
        (0, graphql_1.Field)(function () { return Boolean; })
    ], CreateStartupInput.prototype, "isTrending");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "createdAt");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "modifiedAt");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "Name");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "subtitle");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "Summery");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "details");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "foundedOn");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "website");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "email");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "location");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "investmentMin");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "investmentTarget");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "closingDate");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupInput.prototype, "userId");
    CreateStartupInput = __decorate([
        (0, graphql_1.InputType)()
    ], CreateStartupInput);
    return CreateStartupInput;
}());
exports.CreateStartupInput = CreateStartupInput;
