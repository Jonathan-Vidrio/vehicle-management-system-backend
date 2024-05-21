import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleMaintenanceDto } from './create-vehicle-maintenance.dto';

export class UpdateVehicleMaintenanceDto extends PartialType(
  CreateVehicleMaintenanceDto,
) {
  readonly VehiclePlates?: string;
  readonly Date?: Date;
  readonly Description?: string;
  readonly WorkerID?: number;
}
