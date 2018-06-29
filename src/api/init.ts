import Router from 'koa-router';
import { getUserById } from './v1/user';
import { dispatchToken } from './v1/token';
import { authMiddle } from '../libs/basicAuth';
const apiV1 = new Router({
  prefix: '/api/v1'
});

// 为user路由函数提供一个权限认证的中间件
apiV1.use('/user', authMiddle);

// declare routes
apiV1.get('/user/:id', getUserById);

apiV1.post('/token', dispatchToken);

export { apiV1 };
