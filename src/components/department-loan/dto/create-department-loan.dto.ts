export class CreateDepartmentLoanDto {
  readonly VehiclePlates: string;
  readonly BorrowingDeptID: number;
  readonly LendingDeptID: number;
  readonly StartDate: Date;
  readonly EndDate: Date;
}
