"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.StartupsApplyResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var startups_apply_entity_1 = require("./entities/startups-apply.entity");
var user_entity_1 = require("../users/entities/user.entity");
var current_user_decorator_1 = require("../common/decorator/current-user.decorator");
var StartupsApplyResolver = /** @class */ (function () {
    function StartupsApplyResolver(startupsApplyService) {
        this.startupsApplyService = startupsApplyService;
    }
    StartupsApplyResolver.prototype.createStartupsApply = function (createStartupsApplyInput, currentUser) {
        return this.startupsApplyService.create(createStartupsApplyInput, currentUser.userId);
    };
    StartupsApplyResolver.prototype.findAll = function () {
        return this.startupsApplyService.findAll(); //TODO Paginate response
    };
    StartupsApplyResolver.prototype.findOne = function (id) {
        return this.startupsApplyService.findOne(id);
    };
    StartupsApplyResolver.prototype.findAllByUser = function (currentUser) {
        return this.startupsApplyService.findAllByUser(currentUser.userId);
    };
    StartupsApplyResolver.prototype.user = function (parent) {
        return this.startupsApplyService.findOwnerUser(parent.userId);
    };
    __decorate([
        (0, graphql_1.Mutation)(function () { return startups_apply_entity_1.StartupsApply; }),
        __param(0, (0, graphql_1.Args)('createStartupsApplyInput')),
        __param(1, (0, current_user_decorator_1.CurrentUser)())
    ], StartupsApplyResolver.prototype, "createStartupsApply");
    __decorate([
        (0, graphql_1.Query)(function () { return [startups_apply_entity_1.StartupsApply]; }, { name: 'startupsApply' })
    ], StartupsApplyResolver.prototype, "findAll");
    __decorate([
        (0, graphql_1.Query)(function () { return startups_apply_entity_1.StartupsApply; }, { name: 'startupsApplyById' }),
        __param(0, (0, graphql_1.Args)('id', { type: function () { return String; } }))
    ], StartupsApplyResolver.prototype, "findOne");
    __decorate([
        (0, graphql_1.Query)(function () { return [startups_apply_entity_1.StartupsApply]; }, { name: 'startupsApplyByCurrentUser' }),
        __param(0, (0, current_user_decorator_1.CurrentUser)())
    ], StartupsApplyResolver.prototype, "findAllByUser");
    __decorate([
        (0, graphql_1.ResolveField)(function () { return user_entity_1.User; }),
        __param(0, (0, graphql_1.Parent)())
    ], StartupsApplyResolver.prototype, "user");
    StartupsApplyResolver = __decorate([
        (0, graphql_1.Resolver)(function () { return startups_apply_entity_1.StartupsApply; })
    ], StartupsApplyResolver);
    return StartupsApplyResolver;
}());
exports.StartupsApplyResolver = StartupsApplyResolver;
