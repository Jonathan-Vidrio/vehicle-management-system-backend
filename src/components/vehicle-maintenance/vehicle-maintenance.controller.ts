import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VehicleMaintenanceService } from './vehicle-maintenance.service';
import { CreateVehicleMaintenanceDto } from './dto/create-vehicle-maintenance.dto';
import { UpdateVehicleMaintenanceDto } from './dto/update-vehicle-maintenance.dto';
import { VehicleMaintenance } from './entities/vehicle-maintenance.entity';

@Controller('vehicle-maintenance')
export class VehicleMaintenanceController {
  constructor(
    private readonly vehicleMaintenanceService: VehicleMaintenanceService,
  ) {}

  @Post()
  create(
    @Body() createVehicleMaintenanceDto: CreateVehicleMaintenanceDto,
  ): Promise<VehicleMaintenance> {
    return this.vehicleMaintenanceService.create(createVehicleMaintenanceDto);
  }

  @Get()
  findAll(): Promise<VehicleMaintenance[]> {
    return this.vehicleMaintenanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<VehicleMaintenance> {
    return this.vehicleMaintenanceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVehicleMaintenanceDto: UpdateVehicleMaintenanceDto,
  ): Promise<VehicleMaintenance> {
    return this.vehicleMaintenanceService.update(
      +id,
      updateVehicleMaintenanceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<VehicleMaintenance> {
    return this.vehicleMaintenanceService.remove(+id);
  }
}
