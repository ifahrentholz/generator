import chalk from 'chalk';

class Logger {
  message(msg, type) {
    let logType = null;

    if (!msg) {
      return;
    }

    if (type && type === "error") {
      logType = chalk.red;
    } else {
      logType = chalk.green;
    }
    return console.log(logType(msg));
  }
}

export default new Logger();