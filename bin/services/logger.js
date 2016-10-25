"use strict";
var chalk = require('chalk');
var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.message = function (msg, type) {
        if (!msg) {
            return;
        }
        if (type && type === "error") {
            this.logType = chalk.red;
        }
        else {
            this.logType = chalk.green;
        }
        return console.log(this.logType(msg));
    };
    return Logger;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Logger();
