/**
 * @fileoverview Dosen&#39;t allow jp
 * @author K-Sato1995
 */
'use strict'

//------------------------------------------------------------------------------
// Working with Rules(ESLint official Document)
// https://eslint.org/docs/developer-guide/working-with-rules
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports.rules = {
  'no-hoge': {
    create: function (context) {
      return {
        Identifier(node) {
          if (node.name === 'hoge') {
            context.report({ node, message: 'You MUST NOT USE hoge variable.' })
          }
        }
      }
    }
  }
}

module.exports.configs = {
  recommended: {
    rules: {
      'no-jp/no-hoge': 2,
    },
  },
}



