#!/usr/bin/env node
/// <reference path="../typings/index.d.ts" />


import * as program from "commander";

program
.version("1.0.0")
.command('component <cName>')
.action((cName) => {
  console.log("test123");
  console.log(cName);
});

program.parse(process.argv);
