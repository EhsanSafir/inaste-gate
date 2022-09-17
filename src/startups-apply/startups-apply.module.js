"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StartupsApplyModule = void 0;
var common_1 = require("@nestjs/common");
var startups_apply_service_1 = require("./startups-apply.service");
var startups_apply_resolver_1 = require("./startups-apply.resolver");
var typeorm_1 = require("@nestjs/typeorm");
var startups_apply_entity_1 = require("./entities/startups-apply.entity");
var users_module_1 = require("../users/users.module");
var StartupsApplyModule = /** @class */ (function () {
    function StartupsApplyModule() {
    }
    StartupsApplyModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([startups_apply_entity_1.StartupsApply]), users_module_1.UsersModule],
            providers: [startups_apply_resolver_1.StartupsApplyResolver, startups_apply_service_1.StartupsApplyService]
        })
    ], StartupsApplyModule);
    return StartupsApplyModule;
}());
exports.StartupsApplyModule = StartupsApplyModule;
