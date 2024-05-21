import {
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Vehicle } from '../../vehicle/entities/vehicle.entity';

@Table({ tableName: 'VehicleTypes' })
export class VehicleType extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  VehicleTypeID: number;

  @Column({ allowNull: false, unique: true })
  Type: string;

  @Column
  Description: string;

  @HasMany(() => Vehicle)
  Vehicles: Vehicle[];
}
