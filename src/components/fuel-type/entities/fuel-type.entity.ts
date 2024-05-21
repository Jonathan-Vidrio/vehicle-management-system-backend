import {
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { VehicleFuel } from '../../vehicle-fuel/entities/vehicle-fuel.entity';

@Table({ tableName: 'FuelTypes' })
export class FuelType extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  FuelTypeID: number;

  @Column({ allowNull: false, unique: true })
  Type: string;

  @Column
  Description: string;

  @HasMany(() => VehicleFuel)
  VehicleFuels: VehicleFuel[];
}
