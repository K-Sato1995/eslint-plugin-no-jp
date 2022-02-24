"use strict";
exports.__esModule = true;
exports.noJpComment = void 0;
exports.noJpComment = {
    meta: {
        messages: {
            'noJpComment': '日本語のご使用はお控えください'
        }
    },
    create: function (context) {
        var sourceCode = context.getSourceCode();
        var comments = sourceCode.ast.comments;
        return {
            'Program': function (node) {
                comments.forEach(function (comment) {
                    if (comment.value.trim() === 'hoge') {
                        context.report({ node: node, messageId: 'noJpComment' });
                    }
                });
            }
        };
    }
};
