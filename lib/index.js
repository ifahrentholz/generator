#!/usr/bin/env node
var program = require('commander');
var pkg     = require("../package.json");

program
  .version(pkg.version);

program
  .command('create <appName>')
  .description('install one or more packages')
  .action(function(appName) {
    console.log("create %s", appName);
  });

program
  .command('component <componentName>')
  .description('generate a new component')
  .action(function(componentName) {
    console.log("create component %s", componentName);
  });

program.parse(process.argv);