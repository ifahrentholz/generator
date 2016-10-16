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
var Creator = require("./components/creator");

program
  .version(pkg.version);

program
  .command('new <appName>')
  .description('install one or more packages')
  .action(function(appName) {
    if(checkDir(appName)) {
      return new Logger("Can't proceed because the directory " + appName + " already exists.", "error");
    }
    return new Creator(appName + "/", config.structure);
  });

program
  .command('generate <componentName>')

  .description('generate a new component')
  .action(function(componentName) {
    if(checkDir(componentName)) {
      return new Logger("Can't proceed because the directory " + componentName + " already exists.", "error");
    }
    return new Creator(componentName, config.component);
  });


program.parse(process.argv);
