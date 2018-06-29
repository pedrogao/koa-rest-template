/**
 * HTTP异常处理基类
 *
 * @class HttpException
 * @extends {Error}
 */

export interface Exception {
  code?: number;
  msg?: string;
  errorCode?: number;
}

export class HttpException extends Error {
  public code: number = 400;
  public msg: string = 'unknown error';
  public errorCode: number = 999;

  constructor(ex?: Exception) {
    super();
    if (ex && ex.code) {
      this.code = ex.code;
    }
    if (ex && ex.msg) {
      this.msg = ex.msg;
    }
    if (ex && ex.errorCode) {
      this.errorCode = ex.errorCode;
    }
  }
}
// msg必须每次指定，js没有默认的赋值操作，父类的构造函数在字段赋值之前。
export class ParametersException extends HttpException {
  public msg!: string;
  public errorCode = 10001;
}

export class TokenException extends HttpException {
  public code: number = 401;
  public msg: string = 'token verify failed';
  public errorCode = 20001;
}

export class UserNotFoundException extends HttpException {
  public code: number = 404;
  public msg: string = 'user not found';
  public errorCode = 30001;
}

export class AuthException extends HttpException {
  public code: number = 401;
  public msg: string = 'must be auth';
  public errorCode = 20002;
}
