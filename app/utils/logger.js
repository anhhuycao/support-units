const fs = require('fs');
const path = require('path');
const moment = require('moment');
const winston = require('winston');
const config = require('../config/logger');
require('winston-daily-rotate-file');

const dirLogPath = './logs';

if (!fs.existsSync(dirLogPath)) {
  fs.mkdirSync(dirLogPath);
}

const formatLocal = () => moment().format('YYYY-MM-DD HH:mm:ss');

const fileLogFormat = winston.format.combine(
  winston.format.align(),
  winston.format.splat(),
  winston.format.simple(),
  winston.format.printf((info) => `${formatLocal()} ${info.level} ${info.message}`)
);

const consoleLogFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.align(),
  winston.format.splat(),
  winston.format.simple(),
  winston.format.printf((info) => `${formatLocal()} ${info.level}: ${info.message}`)
);

const transportInfo = new winston.transports.DailyRotateFile({
  filename: dirLogPath + '/info.log',
  maxsize: '20m',
  maxFiles: '14d',
  json: false,
  handleExceptions: true,
  humanReadableUnhandledException: true,
  level: 'info',
  datePattern: 'YYYY-MM-DD',
  prepend: true,
});

const transportError = new winston.transports.File({
  filename: dirLogPath + '/error.log',
  maxsize: 30000000,
  maxFiles: 10,
  json: false,
  handsleExceptions: true,
  humanReadableUnhandledException: true,
  level: 'error',
  prepend: true,
});

const transportConsole = new winston.transports.Console({
  json: false,
  format: consoleLogFormat,
  handleExceptions: true,
  humanReadableUnhandledException: true,
  colorize: true,
  level: config.CONSOLE_LOG_LEVEL || 'info',
});

const logger = winston.createLogger({
  format: fileLogFormat,
  transports: [transportConsole, transportInfo, transportError],
  exitOnError: false,
});

module.exports = function (mod) {
  const filename = path.relative(process.cwd(), mod.filename);

  return {
    info: function () {
      logger.info.apply(logger, this.formatLogArguments(arguments));
    },
    debug: function () {
      logger.debug.apply(logger, this.formatLogArguments(arguments));
    },
    warn: function () {
      logger.warn.apply(logger, this.formatLogArguments(arguments));
    },
    error: function () {
      logger.error.apply(logger, this.formatLogArguments(arguments));
    },
    formatLogArguments: function (args) {
      const newArgs = Array.prototype.slice.call(args);
      newArgs[0] = filename + ' - ' + args[0];
      return newArgs;
    },
  };
};
