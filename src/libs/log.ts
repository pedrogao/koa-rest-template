import * as log4js from 'log4js';

const logger = log4js.getLogger();
logger.level = 'info';

export function applyLog(app: any) {
  app.log = logger;
}
