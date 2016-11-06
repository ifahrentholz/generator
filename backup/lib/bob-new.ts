import * as program from "commander"
import { Bob } from './components/creator'

let bob = new Bob();

program
  .action((app:string) => {
    bob.generate(app, "dummy", "target")
  })
  .parse(process.argv);