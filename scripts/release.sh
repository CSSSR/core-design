#!/bin/sh

./node_modules/.bin/lerna publish from-git --yes --registry https://registry.npmjs.org/ --no-push
