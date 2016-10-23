var chalk = require("chalk");

var Logger = function(msg, type) {
  this.logType = null;

  if(!msg) {
    return;
  }

  if(type && type === "error") {
    this.logType = chalk.red;
  } else {
    this.logType = chalk.green;
  }

  return console.log(this.logType(msg));

};

module.exports = Logger;