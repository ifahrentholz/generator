"use strict";
var fs = require("fs-extra");
var isArray_1 = require('../helper/isArray');
var isObject_1 = require('../helper/isObject');
var replaceString_1 = require('../helper/replaceString');
var logger_1 = require('../services/logger');
var Creator = (function () {
    function Creator() {
    }
    Creator.prototype.generate = function (cName, structure, target) {
        var _this = this;
        var _file, _folder, _fileName;
        if (!target) {
            target = cName + "/";
        }
        Object.keys(structure).forEach(function (key) {
            var msg = '';
            if (isObject_1.default(structure[key])) {
                _folder = target + key;
                fs.ensureFileSync(_folder + "/.keep");
                msg = "created folder " + _folder;
                logger_1.default.message(msg);
                _this.generate(cName, structure[key], _folder + "/");
            }
            else {
                if (isArray_1.default(structure[key])) {
                    for (var i = 0; i < structure[key].length; i++) {
                        _fileName = replaceString_1.default(structure[key][i], cName, "%cName%");
                        _file = target + _fileName;
                        fs.createFileSync(_file);
                        msg = "created file " + _file;
                        logger_1.default.message(msg);
                    }
                }
            }
        });
    };
    return Creator;
}());
exports.Creator = Creator;
