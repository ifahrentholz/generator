"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Provide logging functionality. It should be used instead of console.log // log.
 * It provides coloring support. Default is green - if you set type = error 
 * the color will be red.
 */
var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "message",

    /**
     * @param {String} msg - Put your message here
     * @param {String} type - Either omit this to get a green log color. Set "error" and the log color will be red.
     * @returns {String} 
     */
    value: function message(msg, type) {
      var logType = null;

      if (!msg) {
        return;
      }

      if (type && type === "error") {
        logType = _chalk2.default.red;
      } else {
        logType = _chalk2.default.green;
      }
      return console.log(logType(msg));
    }
  }]);

  return Logger;
}();

exports.default = new Logger();
//# sourceMappingURL=logger.js.map