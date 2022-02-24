import { noHoge } from './rules/noHoge'
import { noJpComment } from './rules/noJpComment'
//------------------------------------------------------------------------------
// Working with Rules(ESLint official Document)
// - Rules: https://eslint.org/docs/developer-guide/working-with-rules
// - Selectors: https://eslint.org/docs/developer-guide/selectors
//------------------------------------------------------------------------------
module.exports.rules = {
  'no-hoge': noHoge,
  'no-jp-comment': noJpComment
}

module.exports.configs = {
  recommended: {
    rules: {
      'no-jp/no-hoge': 2,
      'no-jp/no-jp-comment': 2
    },
  },
}



