#!/usr/bin/env node
"use strict";
var program = require("commander");
program
    .version("1.0.0")
    .command('component <cName>')
    .action(function (cName) {
    console.log("test1337");
    console.log(cName);
});
program.parse(process.argv);
