import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { VehicleType } from '../../vehicle-type/entities/vehicle-type.entity';
import { Status } from '../../status/entities/status.entity';
import { DepartmentLoan } from '../../department-loan/entities/department-loan.entity';
import { VehicleFuel } from '../../vehicle-fuel/entities/vehicle-fuel.entity';
import { VehicleUsage } from '../../vehicle-usage/entities/vehicle-usage.entity';
import { VehicleMaintenance } from '../../vehicle-maintenance/entities/vehicle-maintenance.entity';

@Table({ tableName: 'Vehicles' })
export class Vehicle extends Model {
  @PrimaryKey
  @Column
  VehiclePlates: string;

  @Column
  Image: string;

  @ForeignKey(() => VehicleType)
  @Column({ allowNull: false })
  VehicleTypeID: number;

  @Column({ allowNull: false })
  Brand: string;

  @Column({ allowNull: false })
  Model: string;

  @Column({ allowNull: false, unique: true })
  SerialNumber: string;

  @Column({ allowNull: false })
  Color: string;

  @ForeignKey(() => Status)
  @Column({ allowNull: false, defaultValue: 1 })
  StatusID: number;

  @HasMany(() => DepartmentLoan)
  Loans: DepartmentLoan[];

  @HasMany(() => VehicleFuel)
  Fuels: VehicleFuel[];

  @HasMany(() => VehicleUsage)
  Usages: VehicleUsage[];

  @HasMany(() => VehicleMaintenance)
  Maintenances: VehicleMaintenance[];

  @BelongsTo(() => VehicleType)
  VehicleType: VehicleType;

  @BelongsTo(() => Status)
  Status: Status;
}
