'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fsExtra = require('fs-extra');

var fs = _interopRequireWildcard(_fsExtra);

var _isArray = require('../helper/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = require('../helper/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _replaceString = require('../helper/replaceString');

var _replaceString2 = _interopRequireDefault(_replaceString);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _path = require('path');

var path = _interopRequireWildcard(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 1. create folder (empty)
 * 2. create file (empty)
 * 3. get bp file based on path of the created file
 * -> file created under stylesheets so look inside config.js[stylesheets] and fetch all filetypes (*.css / *.scss)
 * -> goto folder blueprints/templates/stylesheet fetch all files which match the filestypes and get their content
 * -> paste the content into the created file
 */

var Creator = function () {
  function Creator() {
    _classCallCheck(this, Creator);
  }

  _createClass(Creator, null, [{
    key: 'generate',
    value: function generate(cName, structure, target) {
      var _this = this;

      var _file = void 0,
          _folder = void 0,
          _fileName = void 0,
          newFile = void 0;

      if (!target) {
        target = cName + "/";
      }

      Object.keys(structure).forEach(function (key) {

        var msg = '';

        if ((0, _isObject2.default)(structure[key])) {
          _folder = target + key;
          fs.ensureFileSync(_folder + '/.keep');
          msg = 'created folder ' + _folder;
          _logger2.default.message(msg);
          _this.generate(cName, structure[key], _folder + "/");
        } else {
          if ((0, _isArray2.default)(structure[key])) {
            for (var i = 0; i < structure[key].length; i++) {
              _fileName = (0, _replaceString2.default)(structure[key][i], cName, "%cName%");
              _file = target + _fileName;
              newFile = fs.createFileSync(_file);
              var pa = path.resolve(__dirname, '../../blueprints/bob.config.js');
              console.log(pa);
              var c = fs.readFileSync(pa).toString();
              console.log(c);
              fs.appendFileSync(_file, c);
              var destPathString = target.split("/");
              var templateId = destPathString.filter(function (n) {
                return n.length > 0;
              }).pop();
              console.log(templateId);
              msg = 'created file ' + _file;
              _logger2.default.message(msg);
            }
          }
        }
      });
    }
  }]);

  return Creator;
}();

exports.default = Creator;
//# sourceMappingURL=creator_backup.js.map