#!/bin/sh
trap "exit" INT

if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
  git config --global user.email ${GITHUB_EMAIL}
  git config --global user.name ${GITHUB_USER}

  git checkout master

  git remote set-url origin "https://${GITHUB_TOKEN}@github.com/csssr-dreamteam/core-design.git" > /dev/null 2>&1
  git fetch --tags

  ./node_modules/.bin/lerna version --conventional-commits --allow-branch=master --no-changelog --sign-git-commit --sign-git-tag --yes
fi
