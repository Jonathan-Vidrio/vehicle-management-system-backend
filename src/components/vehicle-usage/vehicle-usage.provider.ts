import { VehicleUsage } from './entities/vehicle-usage.entity';

export const VehicleUsageProvider = [
  {
    provide: 'VEHICLE_USAGE_REPOSITORY',
    useValue: VehicleUsage,
  },
];
