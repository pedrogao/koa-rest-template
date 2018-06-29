import { createConnection } from 'typeorm';
import { User } from '../user';

describe('test for user model', () => {
  it('insert one to db', () => {
    createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'crud',
      entities: [User],
      synchronize: true,
      logging: false
    }).then(async conn => {
      const user = new User();
      user.name = 'pedro';
      user.password = '123456';
      await user.save();
      await expect(user.name).not.toBeNull();
      console.log(user);
      await conn.close();
    });
  });
});

describe('test for user model', () => {
  it('check one user password', () => {
    createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'crud',
      entities: [User],
      synchronize: true,
      logging: false
    }).then(async conn => {
      const user = await User.findOne(1);
      expect(user!.name).not.toBeNull();
      expect(user!.checkPassword('123456')).toBeTruthy();
      console.log(user);
      await conn.close();
    });
  });
});
