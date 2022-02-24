"use strict";
exports.__esModule = true;
exports.noHoge = void 0;
exports.noHoge = {
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
};
