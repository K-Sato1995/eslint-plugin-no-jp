"use strict";
exports.__esModule = true;
exports.noJpIdentifier = void 0;
var utils_1 = require("../utils");
exports.noJpIdentifier = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Make sure there is no identifier written in Japanese.',
            recommended: 'error',
            url: ''
        },
        messages: {
            'noJpIdentifier': 'Please refrain from using the Japanese language for indentifiers(日本語の使用はお控えください)'
        },
        schema: []
    },
    create: function (context) {
        return {
            'Identifier': function (node) {
                if ((0, utils_1.includeJa)(node.name)) {
                    context.report({ node: node, messageId: 'noJpIdentifier' });
                }
            }
        };
    }
};
