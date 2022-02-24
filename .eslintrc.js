module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  plugins: [
    '@typescript-eslint',
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
