import { IRouterContext } from 'koa-router';
import { TokenForm } from '../../validate/forms';
import { User } from '../../model/user';
import { generateToken } from '../../util/token';
import { TokenException } from '../../libs/exception';

// router func for user
export async function dispatchToken(ctx: IRouterContext, next: any) {
  await new TokenForm(ctx).validate();
  const name = (ctx.request as any).body['name'];
  const password = (ctx.request as any).body['password'];
  const user = await User.findOne({ name });
  if (user && user.checkPassword(password)) {
    // 生成token
    const token = await generateToken(user.id!, user.name!);
    ctx.body = { token: token };
  } else {
    throw new TokenException();
  }
}

// ATTENTION
// 不要把ctx.body的赋值写在回调函数或者promise中，会得不到结果，一切以async和await优先
