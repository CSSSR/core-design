module.exports = {
  hooks: {
    'pre-commit': 'lerna run --concurrency 1 --stream precommit',
    'pre-push': 'lerna run --concurrency 1 --stream prepush',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
}
