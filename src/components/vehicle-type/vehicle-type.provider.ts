import { VehicleType } from './entities/vehicle-type.entity';

export const VehicleTypeProvider = [
  {
    provide: 'VEHICLE_TYPE_REPOSITORY',
    useValue: VehicleType,
  },
];
