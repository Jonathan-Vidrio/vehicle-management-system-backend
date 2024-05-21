import { Module } from '@nestjs/common';
import { FuelTypeService } from './fuel-type.service';
import { FuelTypeController } from './fuel-type.controller';

@Module({
  controllers: [FuelTypeController],
  providers: [FuelTypeService],
})
export class FuelTypeModule {}
