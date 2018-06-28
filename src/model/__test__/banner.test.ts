import { Banner } from '../banner';
import { createConnection } from 'typeorm';

describe('get one banner from mysql', () => {
  it('insert one banner', async () => {
    createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'crud',
      entities: [Banner],
      synchronize: true,
      logging: false
    }).then(async conn => {
      const banner = new Banner();
      banner.name = 'bbb';
      banner.description = ' 5548484';
      // banner.updateTime = new Date();
      // banner.deleteTime = new Date();
      await banner.save();
      await expect(banner).not.toBeNull();
      await conn.close();
    });
  });

  it('it should not be empty', () => {
    // here you can start to work with your entities
    createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'crud',
      entities: [Banner],
      synchronize: true,
      logging: false
    }).then(async conn => {
      const one = await Banner.findOne(1);
      await expect(one).toHaveProperty('name', 'bbb');
      console.log(one);
      await conn.close();
    });
  });
});
