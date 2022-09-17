"use strict";
exports.__esModule = true;
exports.IndustryTypeEnum = void 0;
var graphql_1 = require("@nestjs/graphql");
var IndustryTypeEnum;
(function (IndustryTypeEnum) {
    IndustryTypeEnum["MEDIA"] = "media";
    IndustryTypeEnum["FASHION"] = "fashion";
    IndustryTypeEnum["HEALTH"] = "health";
    IndustryTypeEnum["SERVICE"] = "service";
    IndustryTypeEnum["FOOD"] = "food";
    IndustryTypeEnum["ENERGY"] = "energy";
})(IndustryTypeEnum = exports.IndustryTypeEnum || (exports.IndustryTypeEnum = {}));
(0, graphql_1.registerEnumType)(IndustryTypeEnum, {
    name: "IndustryTypeEnum"
});
