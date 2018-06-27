import { isPositiveNumber } from './base';
import { ParametersException } from '../libs/exception';

export class BaseForm {
  id: number;
  protected rules: any = {
    id: isPositiveNumber
  };
  messages: any = {};

  constructor(id: number) {
    this.id = id;
  }

  public _validate() {
    for (const field in this.rules) {
      if (this.rules.hasOwnProperty(field)) {
        const rule = this.rules[field];
        if (Object.getOwnPropertyNames(this).includes(field)) {
          if (!rule((this as any)[field])) {
            this.messages[field] = 'id必须为正整数';
            return false;
          }
        }
      }
    }
    return true;
  }

  public validate() {
    if (!this._validate()) {
      throw new ParametersException();
    }
  }
}
