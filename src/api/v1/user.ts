import { IRouterContext } from 'koa-router';
import { User } from '../../model/user';
import { BaseForm } from '../../validate/forms';

// router func for user
export async function getUserById(ctx: IRouterContext, next: any) {
  // tslint:disable-next-line:radix
  const id = (await ctx.params.id) && (await parseInt(ctx.params.id));
  await new BaseForm(id).validate();
  ctx.body = await User.getUserById(id);
}
