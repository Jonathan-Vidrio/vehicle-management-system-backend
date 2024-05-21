import {
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Vehicle } from '../../vehicle/entities/vehicle.entity';
import { Worker } from '../../worker/entities/worker.entity';

@Table({ tableName: 'VehicleMaintenance' })
export class VehicleMaintenance extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  MaintenanceID: number;

  @ForeignKey(() => Vehicle)
  @Column({ allowNull: false })
  VehiclePlates: string;

  @Column({ allowNull: false, defaultValue: new Date() })
  Date: Date;

  @Column({ allowNull: false })
  Description: string;

  @ForeignKey(() => Worker)
  @Column({ allowNull: false })
  WorkerID: number;
}
