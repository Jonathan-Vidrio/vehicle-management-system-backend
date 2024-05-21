import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Job } from '../../job/entities/job.entity';
import { Status } from '../../status/entities/status.entity';
import { VehicleFuel } from '../../vehicle-fuel/entities/vehicle-fuel.entity';
import { VehicleMaintenance } from '../../vehicle-maintenance/entities/vehicle-maintenance.entity';
import { VehicleUsage } from '../../vehicle-usage/entities/vehicle-usage.entity';

@Table({ tableName: 'Workers' })
export class Worker extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  WorkerID: number;

  @Column({ allowNull: false })
  FirstName: string;

  @Column({ allowNull: false })
  LastName: string;

  @Column({ allowNull: false })
  DepartmentID: number;

  @ForeignKey(() => Job)
  @Column({ allowNull: false })
  JobID: number;

  @Column({ allowNull: false })
  PhoneNumber: string;

  @Column({ allowNull: false })
  Email: string;

  @Column({ allowNull: false })
  Address: string;

  @ForeignKey(() => Status)
  @Column({ allowNull: false, defaultValue: 1 })
  StatusID: number;

  @HasMany(() => VehicleFuel)
  VehicleFuels: VehicleFuel[];

  @HasMany(() => VehicleMaintenance)
  VehicleMaintenances: VehicleMaintenance[];

  @HasMany(() => VehicleUsage)
  VehicleUsages: VehicleUsage[];

  @BelongsTo(() => Job)
  Job: Job;

  @BelongsTo(() => Status)
  Status: Status;
}
