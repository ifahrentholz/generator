import * as fs from 'fs-extra';

import isArray from '../helper/isArray';
import isObject from '../helper/isObject';
import replaceString from '../helper/replaceString';
import logger from './logger';
import * as path from "path";

/**
 * 1. create folder (empty)
 * 2. create file (empty)
 * 3. get bp file based on path of the created file
 * -> file created under stylesheets so look inside config.js[stylesheets] and fetch all filetypes (*.css / *.scss)
 * -> goto folder blueprints/templates/stylesheet fetch all files which match the filestypes and get their content
 * -> paste the content into the created file
 */

export default class Creator {
  static generate(cName, structure, target) {

    let _file, _folder, _fileName, newFile;

    if (!target) {
      target = cName + "/";
    }

    Object.keys(structure).forEach((key) => {

      let msg = '';

      if (isObject(structure[key])) {
        _folder = target + key;
        fs.ensureFileSync(`${_folder}/.keep`);
        msg = `created folder ${_folder}`;
        logger.message(msg);
        this.generate(cName, structure[key], _folder + "/");
      } else {
        if (isArray(structure[key])) {
          for (let i = 0; i < structure[key].length; i++) {
            _fileName = replaceString(structure[key][i], cName, "%cName%");
            _file = target + _fileName;
            newFile = fs.createFileSync(_file);
            let pa = path.resolve(__dirname, '../../blueprints/bob.config.js');
            console.log(pa);
            let c = fs.readFileSync(pa).toString();
            console.log(c);
            fs.appendFileSync(_file, c);
            let destPathString = target.split("/");
            let templateId = destPathString.filter((n) => {
              return n.length > 0;
            }).pop();
            console.log(templateId);
            msg = `created file ${_file}`;
            logger.message(msg);
          }
        }
      }

    });
  }
}

