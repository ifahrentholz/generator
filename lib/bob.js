#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _creator = require('./services/creator');

var _creator2 = _interopRequireDefault(_creator);

var _bob = require('../blueprints/bob.config');

var _bob2 = _interopRequireDefault(_bob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package2.default.version);
// .option('-C, --chdir <path>', 'change the working directory')

_commander2.default.command('new <app>').description('create a new app').action(function (app) {
  _creator2.default.generate(app, _bob2.default.folderStructure);
});

_commander2.default.parse(process.argv);
//# sourceMappingURL=bob.js.map