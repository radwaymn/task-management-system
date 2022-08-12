import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StatusEntity } from '../status/status.entity';
import { UserEntity } from '../user/user.entity';

@Entity('task')
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  title: string;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  user: UserEntity;

  @ManyToOne(() => StatusEntity)
  status: StatusEntity;
}
