import { TSESLint } from '@typescript-eslint/utils'
import { noJpIdentifier } from '../rules/noJpIdentifier'

const ruleName = 'no-jp-identifier'

// https://eslint.org/docs/developer-guide/nodejs-api#ruletester
const tester = new TSESLint.RuleTester({
  /* eslint-disable node/no-extraneous-require */
  parser: require.resolve('espree'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  }
})

describe(ruleName, () => {
  const codeWithEnVar = 'const hello = "Hello"'
  const codeWithEnFunc = 'const hello =  () => "Hello"'
  const codeWithJpVar = 'const こんにちは = "Hello"'
  const codeWithJpFunc = 'const こんにちは = () => "Hello"'

  tester.run(ruleName, noJpIdentifier, {
    valid: [
      { name: 'code with a var in English', code: codeWithEnVar },
      { name: 'code with a func in English', code: codeWithEnFunc },
    ],
    invalid: [
      {
        name: 'code with a var in Japanese',
        code: codeWithJpVar,
        errors: [{ messageId: 'noJpIdentifier' }],
      },
      {
        name: 'code with a func in Japanese',
        code: codeWithJpFunc,
        errors: [{ messageId: 'noJpIdentifier' }],
      },
    ],
  })
})
