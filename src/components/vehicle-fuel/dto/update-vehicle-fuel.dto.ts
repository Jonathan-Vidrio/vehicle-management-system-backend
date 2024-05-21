import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleFuelDto } from './create-vehicle-fuel.dto';

export class UpdateVehicleFuelDto extends PartialType(CreateVehicleFuelDto) {
  readonly VehiclePlates?: string;
  readonly Date?: Date;
  readonly Folio?: string;
  readonly FuelTypeID?: number;
  readonly Liters?: number;
  readonly WorkerID?: number;
}
