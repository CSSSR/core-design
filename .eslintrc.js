module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        printWidth: 100,
        semi: false,
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: 'all',
        bracketSpacing: true,
      },
    ],
  },
  extends: '@csssr/eslint-config-core',
}
