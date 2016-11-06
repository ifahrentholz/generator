import * as fs from "fs-extra";

class Creator {
  cName: string;
  structure: any;
  target: string;

  constructor() {
  }

  generate(cName: string, target?: string, structure?: any) {
    this.cName = cName;
    this.structure = structure;
    this.target = target;

    let _file, _folder, _fileName;

    if (!target) {
      target = cName + "/";
    }

    console.log("should generate:", cName);
  }
}

export {Creator}