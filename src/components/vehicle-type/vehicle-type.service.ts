import { Inject, Injectable } from '@nestjs/common';
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto';
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto';
import { VehicleType } from './entities/vehicle-type.entity';

@Injectable()
export class VehicleTypeService {
  constructor(
    @Inject('VEHICLE_TYPE_REPOSITORY')
    private vehicleTypeRepository: typeof VehicleType,
  ) {}

  create(createVehicleTypeDto: CreateVehicleTypeDto) {
    return 'This action adds a new vehicleType';
  }

  findAll() {
    return this.vehicleTypeRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicleType`;
  }

  update(id: number, updateVehicleTypeDto: UpdateVehicleTypeDto) {
    return `This action updates a #${id} vehicleType`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleType`;
  }
}
