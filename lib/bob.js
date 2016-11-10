#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package2.default.version);
// .option('-C, --chdir <path>', 'change the working directory')
// .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
// .option('-T, --no-tests', 'ignore test hook');

_commander2.default.command('new <app>').description('create a new app').action(function (app) {
  var c = "components";
  console.log("appname: ", (0, _pluralize2.default)(c, 1));
});

_commander2.default.parse(process.argv);
//# sourceMappingURL=bob.js.map