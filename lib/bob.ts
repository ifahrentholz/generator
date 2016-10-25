#!/usr/bin/env node

import * as program from "commander";

var pkg = require("../package.json");

program
  .version(pkg.version)
  .command('new <app>', 'create a new project').alias('n')
  .command('generate', 'invoke a generators').alias('g')
  .parse(process.argv);