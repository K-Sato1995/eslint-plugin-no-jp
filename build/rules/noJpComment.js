"use strict";
exports.__esModule = true;
exports.noJpComment = void 0;
var utils_1 = require("../utils");
exports.noJpComment = {
    meta: {
        messages: {
            'noJpComment': 'Please refrain from using the Japanese language for comments(日本語のご使用はお控えください)'
        }
    },
    create: function (context) {
        var sourceCode = context.getSourceCode();
        var comments = sourceCode.ast.comments;
        return {
            'Program': function () {
                comments.forEach(function (commentNode) {
                    var val = commentNode.value.trim();
                    if ((0, utils_1.includeJa)(val)) {
                        context.report({ node: commentNode, messageId: 'noJpComment' });
                    }
                });
            }
        };
    }
};
