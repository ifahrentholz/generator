"use strict";
var program = require("commander");
var creator_1 = require('./components/creator');
var config_1 = require('./blueprints/config');
var bob = new creator_1.Creator();
program
    .action(function (app) {
    bob.generate(app, config_1.projectStructure);
})
    .parse(process.argv);
