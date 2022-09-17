"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateStartupsApplyInput = void 0;
var graphql_1 = require("@nestjs/graphql");
var CreateStartupsApplyInput = /** @class */ (function () {
    function CreateStartupsApplyInput() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupsApplyInput.prototype, "companyName");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupsApplyInput.prototype, "yourTitle");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupsApplyInput.prototype, "website");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupsApplyInput.prototype, "industryType");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupsApplyInput.prototype, "summery");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupsApplyInput.prototype, "companyAddress");
    __decorate([
        (0, graphql_1.Field)(function () { return Boolean; })
    ], CreateStartupsApplyInput.prototype, "hasProductInMarket");
    __decorate([
        (0, graphql_1.Field)(function () { return Boolean; })
    ], CreateStartupsApplyInput.prototype, "isMakingMoney");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupsApplyInput.prototype, "traction");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupsApplyInput.prototype, "totalRaisedUntilNow");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupsApplyInput.prototype, "pastProject");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupsApplyInput.prototype, "currentAudienceSize");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], CreateStartupsApplyInput.prototype, "expectRaiseAmount");
    CreateStartupsApplyInput = __decorate([
        (0, graphql_1.InputType)()
    ], CreateStartupsApplyInput);
    return CreateStartupsApplyInput;
}());
exports.CreateStartupsApplyInput = CreateStartupsApplyInput;
