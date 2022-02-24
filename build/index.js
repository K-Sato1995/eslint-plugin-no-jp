"use strict";
exports.__esModule = true;
var noHoge_1 = require("./noHoge");
var config_1 = require("./config");
//------------------------------------------------------------------------------
// Working with Rules(ESLint official Document)
// - Rules: https://eslint.org/docs/developer-guide/working-with-rules
// - Selectors: https://eslint.org/docs/developer-guide/selectors
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports.rules = {
    'no-hoge': noHoge_1.noHoge
};
module.exports.configs = config_1.config;
