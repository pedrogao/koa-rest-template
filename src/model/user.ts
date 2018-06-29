import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { aesDecrypt, aesEncrypt } from '../util/common';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number | undefined;
  @Column({ type: 'varchar', length: 15 })
  name: string | undefined;

  // password
  @Column({ type: 'varchar', name: 'password', length: 100 })
  private _password!: string;
  // getter and setter
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = aesEncrypt(value);
  }

  public checkPassword(password: string) {
    if (!this._password) {
      return false;
    }
    return aesDecrypt(this._password) === password;
  }
}

export { User };
