import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkerDto } from './create-worker.dto';

export class UpdateWorkerDto extends PartialType(CreateWorkerDto) {
  readonly FirstName?: string;
  readonly LastName?: string;
  readonly DepartmentID?: number;
  readonly JobID?: number;
  readonly PhoneNumber?: string;
  readonly Email?: string;
  readonly Address?: string;
  readonly StatusID?: number;
}
