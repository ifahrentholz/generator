var fs = require("fs-extra");

var Logger = require("../services/logger");
var isArray = require("../helper/isArray");
var isObject = require("../helper/isObject");
var config = require("../mock/generator.config");
var interpolateString = require("../helper/interpolateString");

var interpolationIdentifier = config.interpolationIdentifier;


var Creator = function(cName, structure) {
  var _file, _folder, _fileName;

  Object.keys(structure).forEach(function(key) {
    var msg = "";

    if(isObject(structure[key])) {
      _folder = cName + "/" + key;
      if(key.indexOf(config.boilerplateIdentifier) === 0) {
        new Logger(_folder, "error");
        return;
      }
      fs.ensureFileSync(_folder + "/.keep");
      msg = "created cName " + _folder;
      new Logger(msg);
      Creator(_folder + "/", structure[key]);
    } else {
      if(isArray(structure[key])) {
        for(var i = 0; i < structure[key].length; i++) {
          _fileName = interpolateString(interpolationIdentifier, structure[key][i], cName);
          _file = cName + "/" + _fileName;
          fs.createFileSync(_file);
          msg = "created file   " + _file;
          new Logger(msg);
        }
      }
    }
  });
};

module.exports = Creator;