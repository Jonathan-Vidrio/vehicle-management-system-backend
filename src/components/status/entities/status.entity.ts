import {
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Worker } from '../../worker/entities/worker.entity';
import { Vehicle } from '../../vehicle/entities/vehicle.entity';

@Table({ tableName: 'Statuses' })
export class Status extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  StatusID: number;

  @Column({ allowNull: false, unique: true })
  Name: string;

  @Column
  Description: string;

  @HasMany(() => Worker)
  Workers: Worker[];

  @HasMany(() => Vehicle)
  Vehicles: Vehicle[];
}
