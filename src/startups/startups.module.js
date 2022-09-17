"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StartupsModule = void 0;
var common_1 = require("@nestjs/common");
var startups_service_1 = require("./startups.service");
var startups_resolver_1 = require("./startups.resolver");
var typeorm_1 = require("@nestjs/typeorm");
var startup_entity_1 = require("./entities/startup.entity");
var StartupsModule = /** @class */ (function () {
    function StartupsModule() {
    }
    StartupsModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([startup_entity_1.Startup])],
            providers: [startups_resolver_1.StartupsResolver, startups_service_1.StartupsService]
        })
    ], StartupsModule);
    return StartupsModule;
}());
exports.StartupsModule = StartupsModule;
