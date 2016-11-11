"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Replace an sub string with another string which is identified by the identifier :)
 * @param {string} string
 * @param {string} replaceString
 * @param {string} identifier
 * @returns {string}
 */
exports.default = function (string, replaceString, identifier) {
  if (string.indexOf(identifier) === -1) {
    return string;
  }
  return string.replace(identifier, replaceString);
};
//# sourceMappingURL=replaceString.js.map