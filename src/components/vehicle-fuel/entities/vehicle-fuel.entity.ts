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
import { FuelType } from '../../fuel-type/entities/fuel-type.entity';
import { Worker } from '../../worker/entities/worker.entity';

@Table({ tableName: 'VehicleFuel' })
export class VehicleFuel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  FuelID: number;

  @ForeignKey(() => Vehicle)
  @Column({ allowNull: false })
  VehiclePlates: string;

  @Column({ allowNull: false, defaultValue: new Date() })
  Date: Date;

  @Column({ allowNull: false, unique: true })
  Folio: string;

  @ForeignKey(() => FuelType)
  @Column({ allowNull: false })
  FuelTypeID: number;

  @Column({ allowNull: false })
  Liters: number;

  @ForeignKey(() => Worker)
  @Column({ allowNull: false })
  WorkerID: number;

  @BelongsTo(() => Vehicle)
  Vehicle: Vehicle;

  @BelongsTo(() => FuelType)
  FuelType: FuelType;

  @BelongsTo(() => Worker)
  Worker: Worker;
}
