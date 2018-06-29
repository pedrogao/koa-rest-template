import { isInt } from 'validator';
import { isEmpty } from '../util/common';

export function isPositiveNumber(num: string) {
  return isInt(num, { min: 0 });
}

// data不为空返回true
export function required(data: any) {
  if (typeof data === 'object') {
    return !isEmpty(data);
  } else if (typeof data === 'string') {
    return data.trim() !== '';
  } else {
    return data !== null && data !== undefined;
  }
}
