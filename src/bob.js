#!/usr/bin/env node

import program from 'commander';
import pkg from '../package.json';
import pluralize from 'pluralize';

program
  .version(pkg.version);
  // .option('-C, --chdir <path>', 'change the working directory')
  // .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
  // .option('-T, --no-tests', 'ignore test hook');

program
  .command('new <app>')
  .description('create a new app')
  .action((app) => {
    let c = "components";
    console.log("appname: ", pluralize(c, 1));
  });

program
  .parse(process.argv);