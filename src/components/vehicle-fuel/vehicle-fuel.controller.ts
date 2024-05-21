import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VehicleFuelService } from './vehicle-fuel.service';
import { CreateVehicleFuelDto } from './dto/create-vehicle-fuel.dto';
import { UpdateVehicleFuelDto } from './dto/update-vehicle-fuel.dto';
import { VehicleFuel } from './entities/vehicle-fuel.entity';

@Controller('vehicle-fuel')
export class VehicleFuelController {
  constructor(private readonly vehicleFuelService: VehicleFuelService) {}

  @Post()
  create(
    @Body() createVehicleFuelDto: CreateVehicleFuelDto,
  ): Promise<VehicleFuel> {
    return this.vehicleFuelService.create(createVehicleFuelDto);
  }

  @Get()
  findAll(): Promise<VehicleFuel[]> {
    return this.vehicleFuelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<VehicleFuel> {
    return this.vehicleFuelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVehicleFuelDto: UpdateVehicleFuelDto,
  ): Promise<VehicleFuel> {
    return this.vehicleFuelService.update(+id, updateVehicleFuelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<VehicleFuel> {
    return this.vehicleFuelService.remove(+id);
  }
}
