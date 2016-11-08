import * as chalk from 'chalk';
import ChalkChain = Chalk.ChalkChain;

class Logger {
  logType: ChalkChain;

  message(msg: string, type?: string) {
    if (!msg) {
      return;
    }

    if (type && type === "error") {
      this.logType = chalk.red;
    } else {
      this.logType = chalk.green;
    }

    return console.log(this.logType(msg));

  }
}

export default new Logger();