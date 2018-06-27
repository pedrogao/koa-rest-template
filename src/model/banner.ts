import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Banner extends BaseEntity {
  @PrimaryGeneratedColumn() id?: number;

  @Column() name?: string;

  @Column() description?: string;

  @Column({
    name: 'delete_time'
  })
  deleteTime?: string;

  @Column({
    name: 'update_time'
  })
  updateTime?: string;
}
