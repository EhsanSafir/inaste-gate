"use strict";
exports.__esModule = true;
exports.RequestParam = void 0;
var common_1 = require("@nestjs/common");
var graphql_1 = require("@nestjs/graphql");
exports.RequestParam = (0, common_1.createParamDecorator)(function (data, context) {
    var ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req;
});
