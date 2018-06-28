import { isInteger } from 'validate.js';

export function isPositiveNumber(num: number | string) {
  if (typeof num !== 'number') {
    // tslint:disable-next-line:radix
    if (parseInt(num) !== parseFloat(num)) {
      return false;
    }
    // tslint:disable-next-line:radix
    num = parseInt(num);
  }
  return isInteger(num) && num > 0;
}
