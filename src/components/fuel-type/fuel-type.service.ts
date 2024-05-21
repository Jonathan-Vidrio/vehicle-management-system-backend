import { Injectable } from '@nestjs/common';
import { CreateFuelTypeDto } from './dto/create-fuel-type.dto';
import { UpdateFuelTypeDto } from './dto/update-fuel-type.dto';

@Injectable()
export class FuelTypeService {
  create(createFuelTypeDto: CreateFuelTypeDto) {
    return 'This action adds a new fuelType';
  }

  findAll() {
    return `This action returns all fuelType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fuelType`;
  }

  update(id: number, updateFuelTypeDto: UpdateFuelTypeDto) {
    return `This action updates a #${id} fuelType`;
  }

  remove(id: number) {
    return `This action removes a #${id} fuelType`;
  }
}
