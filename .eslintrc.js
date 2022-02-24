module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    node: true,
  },
  rules: {
    'semi': [1, 'never'],
    'quotes': [1, 'single'],
    'eol-last': [1, 'always'],
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],
    'node/no-unpublished-import': ['error', {
      'allowModules': ['@typescript-eslint/utils']
    }],
    'node/no-missing-import': ['error', {
      'allowModules': [],
      'resolvePaths': ['.'],
      'tryExtensions': ['.js', '.ts', '.d.ts']
    }]
  }
}
