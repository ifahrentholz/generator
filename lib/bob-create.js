"use strict";

var _commander = require("commander");

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.action(function (app) {
  console.log("app: ", app);
}).parse(process.argv);
//# sourceMappingURL=bob-create.js.map