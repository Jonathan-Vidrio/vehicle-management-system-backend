import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleDto } from './create-vehicle.dto';

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {
  readonly VehiclePlates?: string;
  readonly Image?: string;
  readonly VehicleTypeID?: number;
  readonly Brand?: string;
  readonly Model?: string;
  readonly SerialNumber?: string;
  readonly Color?: string;
  readonly StatusID?: number;
}
