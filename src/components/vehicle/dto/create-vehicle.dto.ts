export class CreateVehicleDto {
  readonly VehiclePlates: string;
  readonly Image: string;
  readonly VehicleTypeID: number;
  readonly Brand: string;
  readonly Model: string;
  readonly SerialNumber: string;
  readonly Color: string;
  readonly StatusId?: number;
}
