import * as program from "commander"
import { Creator } from './components/creator'
import {projectStructure, generators} from './blueprints/config'

let bob = new Creator();

program
  .action((app:string) => {
    bob.generate(app, projectStructure)
  })
  .parse(process.argv);