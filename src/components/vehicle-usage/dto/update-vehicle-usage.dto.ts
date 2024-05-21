import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleUsageDto } from './create-vehicle-usage.dto';

export class UpdateVehicleUsageDto extends PartialType(CreateVehicleUsageDto) {
  readonly VehiclePlates?: string;
  readonly WorkerID?: number;
  readonly StartDateTime?: Date;
  readonly EndDateTime?: Date;
}
