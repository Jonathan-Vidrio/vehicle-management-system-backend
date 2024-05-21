import {
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { DepartmentLoan } from '../../department-loan/entities/department-loan.entity';

@Table({ tableName: 'Departments' })
export class Department extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  DepartmentID: number;

  @Column({ allowNull: false, unique: true })
  Name: string;

  @Column
  Description: string;

  @HasMany(() => DepartmentLoan)
  Loans: DepartmentLoan[];
}
