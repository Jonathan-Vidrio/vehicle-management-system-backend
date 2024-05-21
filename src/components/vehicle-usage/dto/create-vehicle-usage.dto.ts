export class CreateVehicleUsageDto {
  readonly VehiclePlates: string;
  readonly WorkerID: number;
  readonly StartDateTime: Date;
  readonly EndDateTime: Date;
}
