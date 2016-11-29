#!/usr/bin/env node

import program from 'commander';
import pkg from '../package.json';
import pluralize from 'pluralize';
import creator from './services/creator';
import config from '../blueprints/bob.config';

program
  .version(pkg.version);
// .option('-C, --chdir <path>', 'change the working directory')

program
  .command('new <app>')
  .description('create a new app')
  .action((app) => {
    creator(app, config.folderStructure);
  });

program
  .parse(process.argv);


