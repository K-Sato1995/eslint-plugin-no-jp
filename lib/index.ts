import { noJpIdentifier } from './rules/noJpIdentifier'
import { noJpComment } from './rules/noJpComment'
//------------------------------------------------------------------------------
// Working with Rules(ESLint official Document)
// - Rules: https://eslint.org/docs/developer-guide/working-with-rules
// - Selectors: https://eslint.org/docs/developer-guide/selectors
//------------------------------------------------------------------------------
module.exports.rules = {
  'no-jp-identifier': noJpIdentifier,
  'no-jp-comment': noJpComment
}

module.exports.configs = {
  recommended: {
    rules: {
      'no-jp/no-jp-identifier': 2,
      'no-jp/no-jp-comment': 1
    },
  },
}



