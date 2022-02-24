import { TSESTree } from "@typescript-eslint/utils";
import { RuleContext } from '@typescript-eslint/utils/dist/ts-eslint';
//------------------------------------------------------------------------------
// Working with Rules(ESLint official Document)
// - Rules: https://eslint.org/docs/developer-guide/working-with-rules
// - Selectors: https://eslint.org/docs/developer-guide/selectors
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

type MessageIds = 'noHoge' | 'noJpComment'
type Options = []

const rules = {
  'no-hoge': {
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
  },
}

module.exports.rules = rules;


module.exports.configs = {
  recommended: {
    rules: {
      'no-jp/no-hoge': 2
    },
  },
}



