import { IRouterContext } from 'koa-router';
import { User } from '../../model/user';
import { UserInfoForm } from '../../validate/forms';

// router func for user
export async function getUserById(ctx: IRouterContext, next: any) {
  await new UserInfoForm(ctx).validate();
  // tslint:disable-next-line:radix
  const id = (await ctx.params.id) && (await parseInt(ctx.params.id));
  ctx.body = await User.findOne(id);
}
