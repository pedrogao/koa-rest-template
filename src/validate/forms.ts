import { isPositiveNumber, required } from './base';
import { ParametersException } from '../libs/exception';
import { IRouterContext } from 'koa-router';
import { isEmpty } from '../util/common';

export interface Rules {
  [x: string]: any;
}

export interface Messages {
  [x: string]: string;
}

/**
 * 参数校验的基类，既校验路由里面的参数也校验request.body里面的参数
 *
 * @export
 * @class BaseForm
 */
export class BaseForm {
  // koa的上下文对象
  ctx: IRouterContext;
  // 参数校验规则
  protected rules: Rules = {
    // id: [isPositiveNumber]
  };
  // 参数校验失败信息
  protected messages: Messages = {
    // id: 'id必须为正整数'
  };

  // 若检验失败
  // 不要改变errors
  private errors: Messages = {};

  constructor(ctx: IRouterContext) {
    this.ctx = ctx;
  }

  protected _validate() {
    for (const field in this.rules) {
      // 遍历rules数组，得到需要校验的字段名
      // 如果字段在路由参数中，或请求体中
      if (
        (this.ctx.params && field in this.ctx.params) ||
        (this.ctx.request.body && field in this.ctx.request.body)
      ) {
        // 如果params中有该字段，进行校验
        let fieldValue = this.ctx.params && this.ctx.params[field];
        // 如果params中没有，在body中取
        if (!fieldValue) {
          fieldValue =
            this.ctx.request.body && (this.ctx.request.body as any)[field];
        }
        // 一个或多个校验器
        const validators = this.rules[field];
        if (Array.isArray(validators)) {
          for (const validate of validators) {
            if (!(validate as any)(fieldValue)) {
              this.errors[field] = this.messages[field];
            }
          }
        } else {
          if (!validators(fieldValue)) {
            // 如果校验失败，将错误信息写入到errors中
            this.errors[field] = this.messages[field];
          }
        }
      }
    }
  }

  public async validate() {
    // 校验
    await this._validate();
    // 如果errors不为空的话校验失败
    if (!isEmpty(this.errors)) {
      let msg: string = '';
      for (const i in this.errors) {
        msg += `${i} -> ${this.errors[i]}`;
      }
      throw new ParametersException({ msg });
    }
  }

  public getErrors() {
    return this.errors;
  }
}

// 校验函数如：isPositiveNumber，必须返回true or false
export class UserInfoForm extends BaseForm {
  // 参数校验规则
  protected rules: Rules = {
    id: [isPositiveNumber]
  };
  // 参数校验失败信息
  protected messages: Messages = {
    id: 'id必须为正整数'
  };
}

// 校验用户登录，发放token
export class TokenForm extends BaseForm {
  protected rules = {
    name: required,
    password: required
  };

  protected messages = {
    name: '用户名不能为空',
    password: '密码不能为空'
  };
}
