import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleService.create(createVehicleDto);
  }

  @Get()
  findAll(): Promise<Vehicle[]> {
    return this.vehicleService.findAll();
  }

  @Get('details/:id')
  findOne(@Param('id') id: string): Promise<Vehicle> {
    return this.vehicleService.findOne(+id);
  }

  @Get('usage-peak/:year')
  getVehicleUsagePeak(@Param('year') year: number): Promise<any> {
    return this.vehicleService.getVehicleUsagePeak(year);
  }

  @Get('fuel-consumption/:year')
  getFuelConsumption(@Param('year') year: number): Promise<any> {
    return this.vehicleService.getFuelConsumption(year);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ): Promise<Vehicle> {
    return this.vehicleService.update(+id, updateVehicleDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string): Promise<Vehicle> {
    return this.vehicleService.remove(+id);
  }
}
