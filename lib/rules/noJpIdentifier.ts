import { TSESLint, TSESTree } from '@typescript-eslint/utils'
import { RuleContext } from '@typescript-eslint/utils/dist/ts-eslint'
import { includeJa } from '../utils'
import type { MessageIds, Options } from '../../types'

export const noJpIdentifier: TSESLint.RuleModule<'noJpIdentifier', []> = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Make sure there is no identifier written in Japanese.',
      recommended: 'error',
      url: '',
    },
    messages: {
      'noJpIdentifier': 'Please refrain from using the Japanese language for indentifiers(日本語の使用はお控えください)'
    },
    schema: []
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
