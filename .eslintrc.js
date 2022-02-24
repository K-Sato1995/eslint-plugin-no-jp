module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
  ],
  parser: ["babel-eslint", '@typescript-eslint/parser',],
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
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
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        "version": ">=13.0.0",
        "ignores": ["modules"]
      }
    ],
  }
}
