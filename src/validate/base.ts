import { isInteger } from 'validate.js';

export function isPositiveNumber(num: number) {
  return isInteger(num) && num > 0;
}
