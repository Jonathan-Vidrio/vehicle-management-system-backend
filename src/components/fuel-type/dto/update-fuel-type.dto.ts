import { PartialType } from '@nestjs/mapped-types';
import { CreateFuelTypeDto } from './create-fuel-type.dto';

export class UpdateFuelTypeDto extends PartialType(CreateFuelTypeDto) {
  readonly Type?: string;
  readonly Description?: string;
}
