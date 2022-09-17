"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UtilsModule = void 0;
var common_1 = require("@nestjs/common");
var password_utils_1 = require("./password.utils");
var jwt_1 = require("@nestjs/jwt");
var config_1 = require("@nestjs/config");
var jwt_config_1 = require("../../config/jwt.config");
var jwt_utils_1 = require("./jwt.utils");
var UtilsModule = /** @class */ (function () {
    function UtilsModule() {
    }
    UtilsModule = __decorate([
        (0, common_1.Global)(),
        (0, common_1.Module)({
            imports: [
                jwt_1.JwtModule.registerAsync({
                    imports: [config_1.ConfigModule],
                    useClass: jwt_config_1["default"]
                }),
            ],
            providers: [password_utils_1.PasswordUtils, jwt_utils_1.JwtUtils],
            exports: [password_utils_1.PasswordUtils, jwt_utils_1.JwtUtils]
        })
    ], UtilsModule);
    return UtilsModule;
}());
exports.UtilsModule = UtilsModule;
