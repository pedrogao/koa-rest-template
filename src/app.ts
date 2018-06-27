import Koa from 'koa';
import KoaBodyParser from 'koa-bodyparser';
import { HttpException } from './libs/exception';
import { applyLog } from './libs/log';
import { IRouterContext } from 'koa-router';
const app = new Koa();

app.use(KoaBodyParser());

// 全局返回格式，错误处理中间件
// 日志记录
app.use(async (ctx, next) => {
  // 在中间件中设置默认的api返回格式为json
  ctx.type = 'application/json;charset=UTF-8';
  try {
    await next();
    if (typeof ctx.body === 'object') {
      ctx.body = await JSON.stringify(ctx.body);
    }
  } catch (err) {
    ctx.status = ctx.status || 400;
    // TODO 未设置默认body
    ctx.app.emit('error', err, ctx);
  }
});

app.on('error', (err: Error, ctx: IRouterContext) => {
  app.log.error(err.name, err.message);
  if (err instanceof HttpException) {
    ctx.status = err.code || 400;
    ctx.body = JSON.stringify({
      error_code: err.errorCode,
      msg: err.msg,
      url: ctx.req.url
    });
  } else {
    ctx.body = JSON.stringify({
      error_code: '999',
      msg: '服务器未知错误',
      url: ctx.req.url
    });
  }
});

applyLog(app);

export { app };
