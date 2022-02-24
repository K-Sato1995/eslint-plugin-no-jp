"use strict";
exports.__esModule = true;
exports.isJa = void 0;
var isJa = function (str) {
    return (str.match(/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/)) ? true : false;
};
exports.isJa = isJa;
