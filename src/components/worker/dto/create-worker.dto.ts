export class CreateWorkerDto {
  readonly FirstName: string;
  readonly LastName: string;
  readonly DepartmentID: number;
  readonly JobID: number;
  readonly PhoneNumber: string;
  readonly Email: string;
  readonly Address: string;
  readonly StatusID?: number;
}
