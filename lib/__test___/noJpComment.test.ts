
import { TSESLint } from "@typescript-eslint/utils";
import { noJpComment } from "../rules/noJpComment";


const ruleName = 'no-jp-comment'
const tester = new TSESLint.RuleTester({
  parser: require.resolve("espree"),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  }
})

describe("test", () => {
  tester.run('no-jp-comment', noJpComment, {
    valid: [
      { code: "<span>test</span>" },
    ],
    invalid: [
      {
        code: "<span>${1}</span>",
        errors: [{ messageId: "noJpComment" }],
      },
    ],
  });
});
