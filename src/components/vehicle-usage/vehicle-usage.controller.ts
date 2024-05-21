import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VehicleUsageService } from './vehicle-usage.service';
import { CreateVehicleUsageDto } from './dto/create-vehicle-usage.dto';
import { UpdateVehicleUsageDto } from './dto/update-vehicle-usage.dto';
import { VehicleUsage } from './entities/vehicle-usage.entity';

@Controller('vehicle-usage')
export class VehicleUsageController {
  constructor(private readonly vehicleUsageService: VehicleUsageService) {}

  @Post()
  create(
    @Body() createVehicleUsageDto: CreateVehicleUsageDto,
  ): Promise<VehicleUsage> {
    return this.vehicleUsageService.create(createVehicleUsageDto);
  }

  @Get()
  findAll(): Promise<VehicleUsage[]> {
    return this.vehicleUsageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<VehicleUsage> {
    return this.vehicleUsageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVehicleUsageDto: UpdateVehicleUsageDto,
  ): Promise<VehicleUsage> {
    return this.vehicleUsageService.update(+id, updateVehicleUsageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<VehicleUsage> {
    return this.vehicleUsageService.remove(+id);
  }
}
