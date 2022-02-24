"use strict";
exports.__esModule = true;
var rules = {
    'no-hoge': {
        meta: {
            type: "suggestion",
            messages: {
                'noHoge': 'You MUST NOT USE hoge variable.'
            }
        },
        create: function (context) {
            return {
                'Identifier': function (node) {
                    if (node.name === 'hoge') {
                        context.report({ node: node, messageId: 'noHoge' });
                    }
                }
            };
        }
    }
};
module.exports.rules = rules;
module.exports.configs = {
    recommended: {
        rules: {
            'no-jp/no-hoge': 2
        }
    }
};
