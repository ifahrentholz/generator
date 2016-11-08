import * as fs from "fs-extra";

import isArray from '../helper/isArray';
import isObject from '../helper/isObject';
import replaceString from '../helper/replaceString';
import logger from '../services/logger';


export class Creator {

  generate(cName: string, structure: Object, target?: string) {
    let _file:string, _folder:string, _fileName:string;

    if (!target) {
      target = cName + "/";
    }

    Object.keys(structure).forEach((key) => {
      let msg = '';

      if(isObject(structure[key])) {
        _folder = target + key;
        fs.ensureFileSync(`${_folder}/.keep`);
        msg = `created folder ${_folder}`;
        logger.message(msg);
        this.generate(cName, structure[key], _folder + "/");
      } else {
        if(isArray(structure[key])) {
          for(let i = 0; i < structure[key].length; i++) {
            _fileName = replaceString(structure[key][i], cName, "%cName%");
            _file = target + _fileName;
            fs.createFileSync(_file);
            msg = `created file ${_file}`;
            logger.message(msg);
          }
        }
      }
    });

  }
}
