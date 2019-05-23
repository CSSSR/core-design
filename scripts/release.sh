#!/bin/sh

printf "//registry.npmjs.org/:_authToken="%s"\n@csssr:registry=https://registry.npmjs.org/\n" "$NPM_TOKEN" >> $HOME/.npmrc 2> /dev/null
./node_modules/.bin/lerna publish from-git --yes --registry https://registry.npmjs.org/
