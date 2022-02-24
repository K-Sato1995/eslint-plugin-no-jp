"use strict";
exports.__esModule = true;
var noJpIdentifier_1 = require("./rules/noJpIdentifier");
var noJpComment_1 = require("./rules/noJpComment");
//------------------------------------------------------------------------------
// Working with Rules(ESLint official Document)
// - Rules: https://eslint.org/docs/developer-guide/working-with-rules
// - Selectors: https://eslint.org/docs/developer-guide/selectors
//------------------------------------------------------------------------------
module.exports.rules = {
    'no-jp-identifier': noJpIdentifier_1.noJpIdentifier,
    'no-jp-comment': noJpComment_1.noJpComment
};
module.exports.configs = {
    recommended: {
        rules: {
            'no-jp/no-jp-identifier': 2,
            'no-jp/no-jp-comment': 1
        }
    }
};
