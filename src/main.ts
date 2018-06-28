import { app } from './app';
import { apiV1 } from './api/init';
import Router from 'koa-router';
import 'reflect-metadata'; // orm need
import { createConnection } from 'typeorm';

createConnection()
  .then(async conn => {
    // main router
    const router = new Router();
    // mound apiV1 routes to main router
    router.use(apiV1.routes()).use(router.allowedMethods());

    // mound main router to app
    app.use(router.routes()).use(router.allowedMethods());

    app.listen(3000, () => app.log.start('listening at http://localhost:3000'));
  })
  .catch(err => app.log.error(err));
