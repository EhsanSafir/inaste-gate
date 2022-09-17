"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.JwtUtils = void 0;
var common_1 = require("@nestjs/common");
var jwt_enum_1 = require("../common/enums/jwt.enum");
var JwtUtils = /** @class */ (function () {
    function JwtUtils(jwtService, configService) {
        this.jwtService = jwtService;
        this.configService = configService;
    }
    JwtUtils.prototype.signConfirmMaile = function (email, expiresIn) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, tokenPayload;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(expiresIn !== null && expiresIn !== void 0)) return [3 /*break*/, 1];
                        _a = expiresIn;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.configService.get("jwt.confirm_mail_expiresIn")];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        expiresIn = _a;
                        tokenPayload = {
                            email: email,
                            sub: jwt_enum_1.TokensType.CONFIRM_EMAIL_TOKEN
                        };
                        return [4 /*yield*/, this.jwtService.signAsync(tokenPayload, { expiresIn: expiresIn })];
                    case 4: // TODO Define Type to payload
                    return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    JwtUtils.prototype.verifyToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.jwtService.verifyAsync(token, { ignoreExpiration: false })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    JwtUtils.prototype.signAccessToken = function (email, userId, expiresIn) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, tokenPayload;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(expiresIn !== null && expiresIn !== void 0)) return [3 /*break*/, 1];
                        _a = expiresIn;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.configService.get("jwt.access_token_expiresIn")];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        expiresIn = _a;
                        tokenPayload = {
                            email: email,
                            userId: userId,
                            sub: jwt_enum_1.TokensType.ACCESS_TOKEN
                        };
                        return [4 /*yield*/, this.jwtService.signAsync(tokenPayload, { expiresIn: expiresIn })];
                    case 4: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    JwtUtils.prototype.signRefreshToken = function (email, userId, expiresIn) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, tokenPayload;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(expiresIn !== null && expiresIn !== void 0)) return [3 /*break*/, 1];
                        _a = expiresIn;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.configService.get("jwt.refresh_token_expiresIn")];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        expiresIn = _a;
                        tokenPayload = {
                            email: email,
                            userId: userId,
                            sub: jwt_enum_1.TokensType.REFRESH_TOKEN
                        };
                        return [4 /*yield*/, this.jwtService.signAsync(tokenPayload, { expiresIn: expiresIn })];
                    case 4: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    JwtUtils = __decorate([
        (0, common_1.Injectable)()
    ], JwtUtils);
    return JwtUtils;
}());
exports.JwtUtils = JwtUtils;
