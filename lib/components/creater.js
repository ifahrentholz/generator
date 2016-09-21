var fs = require("fs-extra");
var Logger = require("../services/logger");
var isArray = require("../helper/isArray");
var isObject = require("../helper/isObject");

var Creater = function(folder, object) {
  var _file, _folder;

  Object.keys(object).forEach(function(key) {
    var msg = "";

    if(isObject(object[key])) {
      _folder = folder + key;
      //fs.mkdirsSync(_folder);
      fs.ensureFileSync(_folder + "/.keep");
      msg = "created folder " + _folder;
      new Logger(msg);
      return Creater(_folder + "/", object[key]);
    } else {
      if(isArray(object[key])) {
        for(var i = 0; i < object[key].length; i++) {
          _file = folder + object[key][i];
          fs.createFileSync(_file);
          msg = "created file   " + _file;
          return new Logger(msg);
        }
      }
    }
  });
};

module.exports = Creater;