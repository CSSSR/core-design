const prettierConfig = require('./.prettierrc.js')

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
  extends: '@csssr/eslint-config-core',
}
