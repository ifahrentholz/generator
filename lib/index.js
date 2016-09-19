#!/usr/bin/env node
var program   = require('commander');
var pkg       = require("../package.json");
var structure = require("./mock/structure.json");
var fs        = require("fs-extra");
var dirCache  = [];
var parents   = [];
var pending   = null;

var isArray = function(a) {
  return (!!a) && (a.constructor === Array);
};

var isObject = function(o) {
  return (!!o) && (o.constructor === Object);
};


var looper = function(folder, object) {
  var _file, _folder;

  Object.keys(object).forEach(function(key) {
    if(isObject(object[key])) {
      _folder = folder + key;
      fs.mkdirs(_folder, function(err) {
        if(err) {
          return console.error(err);
        }
        console.log("created folder:", _folder);
      });
      looper(_folder + "/", object[key]);
    } else {
      if(isArray(object[key])) {
        for(var i = 0; i < object[key].length; i++) {
          _file = folder + object[key][i];
          fs.createFile(_file, function(err) {
            if(err) {
              return console.error(err);
            }
            console.log("created file:", _file);
          });
        }
      }
    }
  });
};


program
  .command('test')
  .description('test json structure')
  .action(function() {
    new looper("./", structure);
  });

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