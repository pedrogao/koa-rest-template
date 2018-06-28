import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Banner extends BaseEntity {
  @PrimaryGeneratedColumn() id?: number;

  @Column() name!: string;

  @Column() description!: string;

  @CreateDateColumn({
    name: 'delete_time',
    type: 'timestamp',
    precision: 6
  })
  deleteTime!: Date;

  @UpdateDateColumn({
    name: 'update_time',
    type: 'timestamp',
    precision: 6
  })
  updateTime!: Date;
}
