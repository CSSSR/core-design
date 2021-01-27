const prettierConfig = require('./.prettierrc.js')

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: '@csssr/eslint-config-core',
  plugins: ['@emotion'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    '@emotion/pkg-renaming': 'error',
  },
}
