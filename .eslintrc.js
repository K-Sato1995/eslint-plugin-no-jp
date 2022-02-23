module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended',
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: { mocha: true },
    },
  ],
  rules: {
    'semi': [1, 'never'],
    'quotes': [1, 'single'],
    'eol-last': [1, 'always'],
  }
}
