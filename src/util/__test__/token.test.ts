import { generateToken, verifyToken } from '../token';

describe('test for token', () => {
  it('get a token', async () => {
    const token = await generateToken(1, 'pedro');
    expect(token).not.toBeNull();
    console.log(token);
    verifyToken(token).then(info => {
      expect(info).toHaveProperty('uid');
      console.log(info);
    });
  });
});

describe('verify for token', () => {
  it('shoud be failed', async () => {
    const token = await generateToken(1, 'pedro');
    expect(token).not.toBeNull();
    console.log(token);
    verifyToken('4khohhiojhacjdaljjojojojioj').then(info => {
      expect(info).toHaveProperty('uid');
      console.log(info);
    });
  });
});
