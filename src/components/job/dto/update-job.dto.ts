import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from './create-job.dto';

export class UpdateJobDto extends PartialType(CreateJobDto) {
  readonly Name?: string;
  readonly Description?: string;
}
