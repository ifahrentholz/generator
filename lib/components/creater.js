var fs = require("fs-extra");

var Logger = require("../services/logger");
var isArray = require("../helper/isArray");
var isObject = require("../helper/isObject");
var config = require("../mock/generator.config");


var Creater = function(folder, object) {
  var _file, _folder;

  Object.keys(object).forEach(function(key) {
    var msg = "";

    if(isObject(object[key])) {
      _folder = folder + key;
      if(key.indexOf(config.boilerplateIdentifier) === 0) {
        new Logger(_folder, "error");
        return;
      }
      fs.ensureFileSync(_folder + "/.keep");
      msg = "created folder " + _folder;
      new Logger(msg);
      Creater(_folder + "/", object[key]);
    } else {
      if(isArray(object[key])) {
        for(var i = 0; i < object[key].length; i++) {
          _file = folder + object[key][i];
          fs.createFileSync(_file);
          msg = "created file   " + _file;
          new Logger(msg);
        }
      }
    }
  });
};

module.exports = Creater;