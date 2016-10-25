"use strict";
var program = require("commander");
program
    .action(function (app) {
    console.log("should generate a new app:", app);
})
    .parse(process.argv);
