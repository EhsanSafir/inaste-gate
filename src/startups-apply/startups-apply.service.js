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
exports.StartupsApplyService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var startups_apply_entity_1 = require("./entities/startups-apply.entity");
var StartupsApplyService = /** @class */ (function () {
    function StartupsApplyService(startupsApplyRepository, userService) {
        this.startupsApplyRepository = startupsApplyRepository;
        this.userService = userService;
    }
    StartupsApplyService.prototype.create = function (createStartupsApplyInput, userId) {
        var startupApplyInstance = this.startupsApplyRepository.create(createStartupsApplyInput);
        startupApplyInstance.userId = userId;
        return this.startupsApplyRepository.save(startupApplyInstance);
    };
    StartupsApplyService.prototype.findOwnerUser = function (userId) {
        return this.userService.findOneById(userId);
    };
    StartupsApplyService.prototype.findAll = function () {
        return this.startupsApplyRepository.find();
    };
    StartupsApplyService.prototype.findAllByUser = function (userId) {
        return this.startupsApplyRepository.findBy({ userId: userId });
    };
    StartupsApplyService.prototype.findOne = function (id) {
        return this.startupsApplyRepository.findOneByOrFail({ id: id });
    };
    StartupsApplyService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(startups_apply_entity_1.StartupsApply))
    ], StartupsApplyService);
    return StartupsApplyService;
}());
exports.StartupsApplyService = StartupsApplyService;
