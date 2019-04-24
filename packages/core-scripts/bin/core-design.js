#!/usr/bin/env node

const path = require('path')

require('yargs')
  .commandDir(path.resolve(__dirname, '../cmds'))
  .demandCommand()
  .help().argv
