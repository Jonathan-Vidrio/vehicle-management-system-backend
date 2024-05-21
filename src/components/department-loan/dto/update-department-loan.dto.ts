import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentLoanDto } from './create-department-loan.dto';

export class UpdateDepartmentLoanDto extends PartialType(
  CreateDepartmentLoanDto,
) {
  readonly VehiclePlates?: string;
  readonly BorrowingDeptID?: number;
  readonly LendingDeptID?: number;
  readonly StartDate?: Date;
  readonly EndDate?: Date;
}
