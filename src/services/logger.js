import chalk from 'chalk';

/**
 * Provide logging functionality. It should be used instead of console.log // log.
 * It provides coloring support. Default is green - if you set type = error 
 * the color will be red.
 */
class Logger {
  /**
   * @param {String} msg - Put your message here
   * @param {String} type - Either omit this to get a green log color. Set "error" and the log color will be red.
   * @returns {String} 
   */
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