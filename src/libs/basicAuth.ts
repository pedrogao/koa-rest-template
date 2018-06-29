import * as auth from 'basic-auth';
import { IRouterContext } from 'koa-router';
import { AuthException } from './exception';
import { verifyToken } from '../util/token';

export function basicAuthParse(authorization: string) {
  return auth.parse(authorization);
}

export async function authMiddle(ctx: IRouterContext, next: any) {
  const authValue = ctx.header['authorization'];
  // authorization
  if (!authValue) {
    // ctx.throw(new AuthException());
    throw new AuthException();
  } else {
    const res = await basicAuthParse(authValue);
    if (!res) {
      throw new AuthException();
    }
    // token
    const info = await verifyToken(res.name);
    ctx.state.user = {
      uid: info['uid'],
      name: info['name']
    };
  }
  // 中间件必须调用next函数进入下一个中间件,next函数调用必须await
  await next();
}
