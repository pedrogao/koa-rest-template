import * as jwt from 'jsonwebtoken';
import { TokenException } from '../libs/exception';
const secure = require('../config/secure.json');

export function generateToken(uid: number, name: string) {
  return jwt.sign({ uid, name }, secure['secret-key'], {
    expiresIn: secure['expiresTime']
  });
}

export async function verifyToken(token: string) {
  let decodedInfo: any | undefined;
  await jwt.verify(token, secure['secret-key'], {}, (err, decoded) => {
    if (err) {
      throw new TokenException();
    } else {
      decodedInfo = decoded;
    }
  });
  return decodedInfo;
}
