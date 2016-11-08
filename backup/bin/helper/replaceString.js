"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (string, replaceString, identifier) {
    if (string.indexOf(identifier) === -1) {
        return string;
    }
    return string.replace(identifier, replaceString);
};
