#!/usr/bin/env node

import * as program from "commander";

program
.version("1.0.0")
.command('component <cName>')
.action((cName) => {
  console.log("test1337");
  console.log(cName);
});

program.parse(process.argv);
