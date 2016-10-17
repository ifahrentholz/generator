var fs = require("fs-extra");

var Logger = require("../services/logger");
var isArray = require("../helper/isArray");
var isObject = require("../helper/isObject");
var config = require("../mock/generator.config");
var interpolateString = require("../helper/interpolateString");

var interpolationIdentifier = config.interpolationIdentifier;


var Creator = function(cName, structure, target) {
  var _file, _folder, _fileName;

  if(!target) {
    target = cName + "/";
  }

  Object.keys(structure).forEach(function(key) {
    var msg = "";
    if(isObject(structure[key])) {
      _folder = target + key;
      fs.ensureFileSync(_folder + "/.keep");
      msg = "created folder " + _folder;
      new Logger(msg);
      Creator(cName, structure[key], _folder + "/");
    } else {
      if(isArray(structure[key])) {
        for(var i = 0; i < structure[key].length; i++) {
          _fileName = interpolateString(structure[key][i], cName, interpolationIdentifier);
          _file = target + _fileName;
          fs.createFileSync(_file);
          msg = "created file   " + _file;
          new Logger(msg);
        }
      }
    }
  });
};

module.exports = Creator;