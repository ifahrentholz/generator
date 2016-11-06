#!/usr/bin/env node
"use strict";
var program = require("commander");
var pkg = require("../package.json");
program
    .version(pkg.version)
    .command('new <app>', 'create a new project').alias('n')
    .command('generate', 'invoke a generators').alias('g')
    .parse(process.argv);
