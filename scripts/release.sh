#!/bin/sh

export NPM_CONFIG_PROVENANCE=${NPM_CONFIG_PROVENANCE:-true}
export NPM_CONFIG_REGISTRY=${NPM_CONFIG_REGISTRY:-https://registry.npmjs.org/}
export NPM_CONFIG_ACCESS=${NPM_CONFIG_ACCESS:-public}

./node_modules/.bin/lerna publish from-git --yes --registry "$NPM_CONFIG_REGISTRY" --no-push --no-verify-access
