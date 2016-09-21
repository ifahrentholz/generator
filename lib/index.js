#!/usr/bin/env node

var program = require('commander');
var fso = require("fs");

var config = require("./mock/generator.config");
var pkg = require("../package.json");
var Logger = require("./services/logger");
var isObject = require("./helper/isObject");
var isArray = require("./helper/isArray");
var checkEmpty = require("./helper/checkEmpty");
var checkDir = require("./helper/checkDir");
var Creater = require("./components/creater");

program
  .option('-U, --ui', 'Generate a UI component')
  .version(pkg.version);

program
  .command('create <appName>')
  .description('install one or more packages')
  .action(function(appName) {
    if(checkDir(appName)) {
      return new Logger("Can't proceed because the directory " + appName + " already exists.", "error");
    }
    return new Creater(appName + "/", config.structure);
  });

program
  .command('generate <componentName>')

  .description('generate a new component')
  .action(function(componentName) {
    if(program.ui) {
      console.log("it's a ui component");
    }
    console.log("create component %s", componentName);
  });


program.parse(process.argv);
