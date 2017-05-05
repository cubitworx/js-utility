"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
function IsBlank(obj, isEmpty) {
    if (isEmpty === void 0) { isEmpty = false; }
    return _.isNil(obj) || (isEmpty && _.isEmpty(obj));
}
exports.IsBlank = IsBlank;
//# sourceMappingURL=index.js.map