import { TSESLint } from '@typescript-eslint/utils'
import { noJpComment } from '../rules/noJpComment'

const ruleName = 'no-jp-comment'

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
  const codeWithEnComment = `
    // English Comment
    console.log('test')
  `
  const codeWithJpComment = `
    // 日本語のコメント
    console.log('test')
  `
  const codeWithPartialyJpComment = `
    // 日本語とEnglishコメント
    console.log('test')
  `

  const codeWithEnAndJpComment = `
    // 日本語のコメント
    console.log('test')
    // English Comment
    const func = () => {
      return "This is a function"
    }
  `

  const codeWithJpString = `
    const string = "値は日本語で当然OK"
  `

  const codeWithRussianComment = `
    // Русский комментарий
    console.log('test')
  `

  const codeWithEnBlockComment = `
    /* 
    English Comment 
    */
    console.log('test')
  `

  const codeWithJaBlockComment = `
    /* 
    日本語のコメントブロック
    */
    console.log('test')
  `
  tester.run(ruleName, noJpComment, {
    valid: [
      { name: 'code with an English comment', code: codeWithEnComment },
      { name: 'code with a Japanese string value', code: codeWithJpString },
      { name: 'code with a Russian comment', code: codeWithRussianComment },
      { name: 'code with a English comment(block comment)', code: codeWithEnBlockComment }
    ],
    invalid: [
      {
        name: 'code with a Japanese comment',
        code: codeWithJpComment,
        errors: [{ messageId: 'noJpComment' }],
      },
      {
        name: 'code with a partially Japanese comment',
        code: codeWithPartialyJpComment,
        errors: [{ messageId: 'noJpComment' }],
      },
      {
        name: 'code with a Japanese comment and an English Comment',
        code: codeWithEnAndJpComment,
        errors: [{ messageId: 'noJpComment' }],
      },
      {
        name: 'code with a Japanese comment(block comment)',
        code: codeWithJaBlockComment,
        errors: [{ messageId: 'noJpComment' }],
      }
    ],
  })
})
