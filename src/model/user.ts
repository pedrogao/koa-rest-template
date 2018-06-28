import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number | undefined;
  @Column({ type: 'varchar', length: 15 })
  name: string | undefined;
}

export { User };
