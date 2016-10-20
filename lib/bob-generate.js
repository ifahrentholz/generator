var program = require('commander');

var config = require("./mock/generator.config");
var pkg = require("../package.json");
var Logger = require("./services/logger");
var isObject = require("./helper/isObject");
var isArray = require("./helper/isArray");
var checkEmpty = require("./helper/checkEmpty");
var checkDir = require("./helper/checkDir");
var Creator = require("./components/creator");

program
  .version(pkg.version)
  .command('component', 'invoke a component generator').alias('c')
  .command('service', 'invoke a service generator').alias('s')
  .parse(process.argv);