"use strict";
exports.__esModule = true;
exports.includeJa = void 0;
var includeJa = function (str) {
    var regexPattern = new RegExp(/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]/);
    return regexPattern.test(str);
};
exports.includeJa = includeJa;
