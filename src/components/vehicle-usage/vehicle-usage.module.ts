import { Module } from '@nestjs/common';
import { VehicleUsageService } from './vehicle-usage.service';
import { VehicleUsageController } from './vehicle-usage.controller';
import { DatabaseModule } from '../../database/database.module';
import { VehicleUsageProvider } from './vehicle-usage.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [VehicleUsageController],
  providers: [...VehicleUsageProvider, VehicleUsageService],
})
export class VehicleUsageModule {}
