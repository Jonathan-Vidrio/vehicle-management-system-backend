import { Module } from '@nestjs/common';
import { VehicleTypeService } from './vehicle-type.service';
import { VehicleTypeController } from './vehicle-type.controller';
import { VehicleTypeProvider } from './vehicle-type.provider';

@Module({
  controllers: [VehicleTypeController],
  providers: [...VehicleTypeProvider, VehicleTypeService],
})
export class VehicleTypeModule {}
