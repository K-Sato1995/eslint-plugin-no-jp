import { TSESTree } from "@typescript-eslint/utils";
import { RuleContext } from '@typescript-eslint/utils/dist/ts-eslint';
import { includeJa } from '../utils'
import type { MessageIds, Options } from '../../types'

export const noJpIdentifier = {
  meta: {
    type: "suggestion",
    messages: {
      'noJpIdentifier': 'Please refrain from using the Japanese language for indentifiers(日本語の使用はお控えください)'
    }
  },
  create: (context: RuleContext<MessageIds, Options>) => {
    return {
      'Identifier': (node: TSESTree.Identifier) => {
        if (includeJa(node.name)) {
          context.report({ node, messageId: 'noJpIdentifier' })
        }
      }
    }
  }
}
