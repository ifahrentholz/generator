"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObject = require("../helper/isObject");

var _isObject2 = _interopRequireDefault(_isObject);

var _logger = require("./logger");

var _logger2 = _interopRequireDefault(_logger);

var _fsExtra = require("fs-extra");

var fs = _interopRequireWildcard(_fsExtra);

var _isArray = require("../helper/isArray");

var _isArray2 = _interopRequireDefault(_isArray);

var _replaceString = require("../helper/replaceString");

var _replaceString2 = _interopRequireDefault(_replaceString);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFolder = function createFolder(folder) {
  fs.ensureFileSync(folder + "/.keep");
  _logger2.default.message("created folder " + folder);
};

var createFile = function createFile(file, cName, target) {
  var _file = target + (0, _replaceString2.default)(file, cName, "%cName%");
  fs.createFileSync(_file);
  _logger2.default.message("created file " + _file);
};

var getFileContent = function getFileContent(file) {};

var setFileContent = function setFileContent(file) {};

var generate = function generate(cName, structure, target) {
  Object.keys(structure).forEach(function (key) {
    if ((0, _isObject2.default)(structure[key])) {
      var folder = target + key;
      createFolder(folder);
      generate(cName, structure[key], folder + "/");
    } else if ((0, _isArray2.default)(structure[key])) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = structure[key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var file = _step.value;

          createFile(file, cName, target);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  });
};

exports.default = function (cName, structure) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!target) {
    target = cName + "/";
  }
  generate(cName, structure, target);
};
//# sourceMappingURL=creator.js.map