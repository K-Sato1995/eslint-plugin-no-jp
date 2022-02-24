import { TSESTree } from "@typescript-eslint/utils";
import { RuleContext } from '@typescript-eslint/utils/dist/ts-eslint';
import { includeJa } from '../utils'
import type { MessageIds, Options } from '../../types'

export const noJpComment = {
  meta: {
    messages: {
      'noJpComment': 'Please refrain from using the Japanese language for comments(日本語のご使用はお控えください)'
    }
  },
  create: (context: RuleContext<MessageIds, Options>) => {
    const sourceCode = context.getSourceCode()
    const comments: TSESTree.Comment[] = sourceCode.ast.comments

    return {
      'Program': () => {
        comments.forEach((commentNode: TSESTree.Comment) => {
          const val = commentNode.value.trim()
          if (includeJa(val)) {
            context.report({ node: commentNode, messageId: 'noJpComment' })
          }
        })
      }
    }
  }
}
