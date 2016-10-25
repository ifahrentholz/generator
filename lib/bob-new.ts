import * as program from "commander"
import { Creator } from './components/creator'

let bob = new Creator();

program
  .action((app:string) => {
    // Todo write mock data
    bob.generate(app, "dummy", "target")
  })
  .parse(process.argv);