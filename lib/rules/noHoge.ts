import { TSESTree } from "@typescript-eslint/utils";
import { RuleContext } from '@typescript-eslint/utils/dist/ts-eslint';
import type { MessageIds, Options } from '../../types'

export const noHoge = {
  meta: {
    type: "suggestion",
    messages: {
      'noHoge': 'You MUST NOT USE hoge variable.'
    }
  },
  create: (context: RuleContext<MessageIds, Options>) => {
    return {
      'Identifier': (node: TSESTree.Identifier) => {
        if (node.name === 'hoge') {
          context.report({ node, messageId: 'noHoge' })
        }
      }
    }
  }
}
