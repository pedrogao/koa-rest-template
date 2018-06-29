import * as crypto from 'crypto';
const secure = require('../config/secure.json');
/**
 * 判断一个对象是否为空
 *
 * @export
 * @param {Object} obj
 * @returns
 */
export function isEmpty(obj: Object) {
  for (const key in obj) {
    return false;
  }
  return true;
}

// 加密
export function aesEncrypt(password: string) {
  const cipher = crypto.createCipher('aes192', secure['secret-key']);
  let crypted = cipher.update(password, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

// 解密
export function aesDecrypt(encrypted: string) {
  const decipher = crypto.createDecipher('aes192', secure['secret-key']);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
