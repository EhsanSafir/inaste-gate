"use strict";
exports.__esModule = true;
exports.ConfirmStatusEnum = void 0;
var graphql_1 = require("@nestjs/graphql");
var ConfirmStatusEnum;
(function (ConfirmStatusEnum) {
    ConfirmStatusEnum["APPROVED"] = "approved";
    ConfirmStatusEnum["PENDING"] = "pending";
    ConfirmStatusEnum["REJECTED"] = "rejected";
})(ConfirmStatusEnum = exports.ConfirmStatusEnum || (exports.ConfirmStatusEnum = {}));
(0, graphql_1.registerEnumType)(ConfirmStatusEnum, {
    name: "ConfirmStatusEnum"
});
