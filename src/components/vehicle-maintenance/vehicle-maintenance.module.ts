import { Module } from '@nestjs/common';
import { VehicleMaintenanceService } from './vehicle-maintenance.service';
import { VehicleMaintenanceController } from './vehicle-maintenance.controller';
import { DatabaseModule } from '../../database/database.module';
import { VehicleMaintenanceProvider } from './vehicle-maintenance.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [VehicleMaintenanceController],
  providers: [...VehicleMaintenanceProvider, VehicleMaintenanceService],
})
export class VehicleMaintenanceModule {}
