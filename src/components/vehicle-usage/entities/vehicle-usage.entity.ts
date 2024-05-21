import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Vehicle } from '../../vehicle/entities/vehicle.entity';
import { Worker } from '../../worker/entities/worker.entity';

@Table({ tableName: 'VehicleUsage' })
export class VehicleUsage extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  UsageID: number;

  @ForeignKey(() => Vehicle)
  @Column({ allowNull: false })
  VehiclePlates: string;

  @ForeignKey(() => Worker)
  @Column({ allowNull: false })
  WorkerID: number;

  @Column({ allowNull: false })
  StartDateTime: Date;

  @Column({ allowNull: false })
  EndDateTime: Date;

  @BelongsTo(() => Vehicle)
  Vehicle: Vehicle;

  @BelongsTo(() => Worker)
  Worker: Worker;
}
