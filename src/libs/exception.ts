/**
 * HTTP异常处理基类
 *
 * @class HttpException
 * @extends {Error}
 */
export class HttpException extends Error {
  public code: number = 400;
  public msg: string = 'unknown error';
  public errorCode: number = 999;

  public constructor() {
    super();
  }
}

export class ParametersException extends HttpException {
  public msg = 'parameters error!';
  public errorCode = 10001;
}
