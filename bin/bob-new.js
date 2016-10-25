"use strict";
var program = require("commander");
var creator_1 = require('./components/creator');
var bob = new creator_1.Bob();
program
    .action(function (app) {
    bob.generate(app, "dummy", "target");
})
    .parse(process.argv);
