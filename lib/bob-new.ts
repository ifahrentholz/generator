import * as program from "commander";

program
  .action((app:string) => {
    console.log("should generate a new app:", app);
  })
  .parse(process.argv);