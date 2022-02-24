"use strict";
exports.__esModule = true;
var noHoge_1 = require("./noHoge");
var noJpComment_1 = require("./noJpComment");
//------------------------------------------------------------------------------
// Working with Rules(ESLint official Document)
// - Rules: https://eslint.org/docs/developer-guide/working-with-rules
// - Selectors: https://eslint.org/docs/developer-guide/selectors
//------------------------------------------------------------------------------
module.exports.rules = {
    'no-hoge': noHoge_1.noHoge,
    'no-jp-comment': noJpComment_1.noJpComment
};
module.exports.configs = {
    recommended: {
        rules: {
            'no-jp/no-hoge': 2,
            'no-jp/no-jp-comment': 2
        }
    }
};
