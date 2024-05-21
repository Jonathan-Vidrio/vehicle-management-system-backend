import { VehicleMaintenance } from './entities/vehicle-maintenance.entity';

export const VehicleMaintenanceProvider = [
  {
    provide: 'VEHICLE_MAINTENANCE_REPOSITORY',
    useValue: VehicleMaintenance,
  },
];
