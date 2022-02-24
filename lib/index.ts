import { noHoge } from './noHoge'
import { config } from './config'
//------------------------------------------------------------------------------
// Working with Rules(ESLint official Document)
// - Rules: https://eslint.org/docs/developer-guide/working-with-rules
// - Selectors: https://eslint.org/docs/developer-guide/selectors
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports.rules = {
  'no-hoge': noHoge
}

module.exports.configs = config



