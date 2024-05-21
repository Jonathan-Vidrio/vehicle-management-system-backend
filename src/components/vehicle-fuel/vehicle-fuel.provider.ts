import { VehicleFuel } from './entities/vehicle-fuel.entity';

export const VehicleFuelProvider = [
  {
    provide: 'VEHICLE_FUEL_REPOSITORY',
    useValue: VehicleFuel,
  },
];
