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
import { Department } from '../../department/entities/department.entity';

@Table({ tableName: 'DepartmentLoans' })
export class DepartmentLoan extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  LoanID: number;

  @ForeignKey(() => Vehicle)
  @Column({ allowNull: false })
  VehiclePlates: string;

  @ForeignKey(() => Department)
  @Column({ allowNull: false })
  BorrowingDeptID: number;

  @ForeignKey(() => Department)
  @Column({ allowNull: false })
  LendingDeptID: number;

  @Column({ allowNull: false })
  StartDate: Date;

  @Column({ allowNull: false })
  EndDate: Date;

  @BelongsTo(() => Vehicle)
  Vehicle: Vehicle;

  @BelongsTo(() => Department, 'BorrowingDeptID')
  BorrowingDept: Department;

  @BelongsTo(() => Department, 'LendingDeptID')
  LendingDept: Department;
}
