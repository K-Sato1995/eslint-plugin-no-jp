
import { TSESLint } from "@typescript-eslint/utils";
import { TSESTree } from "@typescript-eslint/utils";
import { RuleContext } from '@typescript-eslint/utils/dist/ts-eslint';
import { includeJa } from '../utils'
import type { MessageIds, Options } from '../../types'

export const noJpComment: TSESLint.RuleModule<'noJpComment', []> = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Check if there is no JP in comments.",
      recommended: "warn",
      url: "",
    },
    messages: {
      'noJpComment': 'Please refrain from using the Japanese language for comments(日本語のご使用はお控えください)'
    },
    schema: []
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
