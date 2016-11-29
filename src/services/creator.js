import isObject from "../helper/isObject";
import logger from './logger';
import * as fs from "fs-extra";
import isArray from "../helper/isArray";
import setFileName from "../helper/replaceString";


/**
 * This method should be used to create an folder.
 * It implicitly adds a .keep file so you can check in
 * the folder structure to your VCS.
 *
 * @param {String} folder
 */
let createFolder = (folder) => {
  fs.ensureFileSync(`${folder}/.keep`);
  logger.message(`created folder ${folder}`);
};



/**
 * Creates a file.
 *
 * @param {String} file
 * @param {String} cName
 * @param {String} target
 */
let createFile = (file, cName, target) => {
  let _filename = setFileName(file, cName, "%cName%");
  let _filepath = target + _filename;
  fs.createFileSync(_filepath);
  logger.message(`created file ${_filepath}`);
  setFileContent(_filename, target);
};


/**
 * Get file content based on path and extension
 * of a given file.
 *
 * @param {String} file
 */
let getFileContent = (file) => {
};


/**
 * Fill a given file with content.
 *
 * @param {String} file
 */
let setFileContent = (file, filepath) => {
  let _fileExtension = file.split(".").pop();
  let _type = filepath.split("/").filter((n) => {
    return n.length > 0;
  }).pop();
  console.log("extension:", _fileExtension);
  console.log("type:", _type);
};



/**
 * The generate function starts parsing through the
 * folder structure and is creating files & folders.
 *
 * @param {String} cName
 * @param {Object} structure
 * @param {String} target
 */
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


/**
 *
 * Start the generate function. The target parameter
 * is optional and will be auto set while traversing through
 * the structure object.
 *
 * @param {String} cName
 * @param {Object} structure
 * @param {String|null} target
 * @returns {void}
 */
export default (cName, structure, target = null) => {
  if (!target) {
    target = cName + "/";
  }
  generate(cName, structure, target);
};