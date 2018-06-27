/**
 * user model
 *
 * @class User
 */
class User {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public static getUserById(id: number) {
    // 伪方法，从数据库中取出user对象
    return new User(id, 'pedro');
  }
}

export { User };
