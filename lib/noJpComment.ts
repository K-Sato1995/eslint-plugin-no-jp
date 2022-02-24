import { TSESTree } from "@typescript-eslint/utils";
import { RuleContext } from '@typescript-eslint/utils/dist/ts-eslint';
import type { MessageIds, Options } from '../types'

export const noJpComment = {
  meta: {
    messages: {
      'noJpComment': '日本語のご使用はお控えください'
    }
  },
  create: (context: RuleContext<MessageIds, Options>) => {
    const sourceCode = context.getSourceCode()
    const comments: TSESTree.Comment[] = sourceCode.ast.comments

    return {
      'Program': (node: TSESTree.Identifier) => {
        comments.forEach((comment) => {
          if (comment.value.trim() === 'hoge') {
            context.report({ node: node, messageId: 'noJpComment' })
          }
        })
      }
    }
  }
}
