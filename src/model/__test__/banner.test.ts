import { Banner } from '../banner';
import { createConnection } from 'typeorm';

describe('get one banner from mysql', () => {
  it('it should not be empty', () => {
    createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'zerg',
      entities: [Banner],
      synchronize: true,
      logging: true
    })
      .then(connection => {
        // here you can start to work with your entities
        const one = Banner.findOne(1);
        expect(one).not.toBe(null);
        console.log(one);
      })
      .catch(error => console.log(error));
  });
});
