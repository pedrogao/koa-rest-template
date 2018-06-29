import Koa from 'koa';
import KoaBodyParser from 'koa-bodyparser';
import { HttpException } from './libs/exception';
import { applyLog } from './libs/log';
import { IRouterContext } from 'koa-router';
import cors from '@koa/cors';

const app = new Koa();

// 跨域
app.use(cors());

// 参数解析
app.use(KoaBodyParser());

// 全局返回格式，错误处理中间件
// 日志记录
app.use(async (ctx, next) => {
  // 在中间件中设置默认的api返回格式为json
  const start = Date.now();
  ctx.type = 'application/json;charset=UTF-8';
  try {
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    ctx.app.log.info(
      `[${ctx.method}] -> [${ctx.url}] from: ${ctx.ip} costs: ${ms}ms`
    );
    if (typeof ctx.body === 'object') {
      ctx.body = await JSON.stringify(ctx.body);
    } else if (
      !ctx.body || // body为undifined
      (typeof ctx.body === 'string' && ctx.body.trim() === '') // body为string且为空字符串时
    ) {
      // 很多时候驾驭不了node的异步机制，很容易提前返回
      // 当body为空时,报默认错误
      ctx.app.emit('error', new HttpException(), ctx);
    }
  } catch (err) {
    ctx.status = ctx.status || 400;
    // TODO 未设置默认body
    ctx.app.emit('error', err, ctx);
  }
});

app.on('error', (err: Error, ctx: IRouterContext) => {
  app.log.error(err);
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

// 添加日志记录
applyLog(app);

export { app };
