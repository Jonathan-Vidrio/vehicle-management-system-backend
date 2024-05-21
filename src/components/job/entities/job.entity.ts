import {
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Worker } from '../../worker/entities/worker.entity';

@Table({ tableName: 'Jobs' })
export class Job extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  JobID: number;

  @Column({ allowNull: false, unique: true })
  Name: string;

  @Column
  Description: string;

  @HasMany(() => Worker)
  Workers: Worker[];
}
