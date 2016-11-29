import isObject from "../helper/isObject";
import logger from './logger';
import * as fs from "fs-extra";
import isArray from "../helper/isArray";
import setFileName from "../helper/replaceString";


let createFolder = (folder) => {
  fs.ensureFileSync(`${folder}/.keep`);
  logger.message(`created folder ${folder}`);
};


let createFile = (file, cName, target) => {
  let _file = target + setFileName(file, cName, "%cName%");
  fs.createFileSync(_file);
  logger.message(`created file ${_file}`);
};


let getFileContent = (file) => {
};


let setFileContent = (file) => {
};


let generate = (cName, structure, target) => {
  Object.keys(structure).forEach((key) => {
    if (isObject(structure[key])) {
      let folder = target + key;
      createFolder(folder);
      generate(cName, structure[key], folder + "/");
    } else if (isArray(structure[key])) {
      for (let file of structure[key]) {
        createFile(file, cName, target);
      }
    }

  });
};


export default (cName, structure, target = null) => {
  if (!target) {
    target = cName + "/";
  }
  generate(cName, structure, target);
};