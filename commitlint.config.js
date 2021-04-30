module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', ['lower-case', 'start-case', 'pascal-case']],
    'subject-case': [2, 'never', ['start-case', 'pascal-case']],
  },
}
