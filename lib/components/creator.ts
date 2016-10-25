import * as fs from "fs-extra";

import isArray from '../helper/isArray';
import isObject from '../helper/isObject';
import logger from '../services/logger';


class Creator {

  generate(cName: String, structure: Object, target?: String) {
    let _file:String, _folder:String, _fileName:String;

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
            _fileName = structure[key][i];
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

export {Creator}