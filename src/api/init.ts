import Router from 'koa-router';
import { getUserById } from './v1/user';

const apiV1 = new Router({
  prefix: '/api/v1'
});

// declare routes
apiV1.get('/user/:id', getUserById);

export { apiV1 };
