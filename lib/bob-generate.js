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
  .parse(process.argv);

var args = program.args;

if (!args.length) {
  console.error('generator type required');
  process.exit(1);
}

if(args.length < 2) {
  console.error('please provide an name');
  process.exit(1);
}

if(args.length > 2) {
  console.error('Expected only two arguments');
  process.exit(1);
}

var type = args[0];
var name = args[1];

console.log();
if(type === 'component' || type === 'c') {
    console.log("generate an component:", name);
} else if(type === 'service' || type === 's') {
  console.log("generate an service:", name);
} else {
  console.log("no valid generator type provided");
}
console.log();