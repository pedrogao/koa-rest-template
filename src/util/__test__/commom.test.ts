import { aesDecrypt, aesEncrypt } from '../common';

describe('generate passsword ', () => {
  it('return digest', () => {
    const passsword = '123456';
    const encrypted = aesEncrypt(passsword);
    expect(encrypted).not.toBeNull();
    const ps = aesDecrypt(encrypted);
    expect(ps).toEqual(passsword);
    console.log(encrypted);
    console.log(ps);
  });
});
