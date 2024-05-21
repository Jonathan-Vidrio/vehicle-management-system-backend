import { Module } from '@nestjs/common';
import { VehicleFuelService } from './vehicle-fuel.service';
import { VehicleFuelController } from './vehicle-fuel.controller';
import { DatabaseModule } from '../../database/database.module';
import { VehicleFuelProvider } from './vehicle-fuel.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [VehicleFuelController],
  providers: [...VehicleFuelProvider, VehicleFuelService],
})
export class VehicleFuelModule {}
