import { Inject, Injectable } from '@nestjs/common';
import { CreateVehicleFuelDto } from './dto/create-vehicle-fuel.dto';
import { UpdateVehicleFuelDto } from './dto/update-vehicle-fuel.dto';
import { VehicleFuel } from './entities/vehicle-fuel.entity';

@Injectable()
export class VehicleFuelService {
  constructor(
    @Inject('VEHICLE_FUEL_REPOSITORY')
    private vehicleFuelRepository: typeof VehicleFuel,
  ) {}

  async create(
    createVehicleFuelDto: CreateVehicleFuelDto,
  ): Promise<VehicleFuel> {
    return await this.vehicleFuelRepository.create({
      ...createVehicleFuelDto,
    });
  }

  async findAll(): Promise<VehicleFuel[]> {
    return await this.vehicleFuelRepository.findAll();
  }

  async findOne(id: number): Promise<VehicleFuel> {
    return await this.vehicleFuelRepository.findByPk(id);
  }

  async update(
    id: number,
    updateVehicleFuelDto: UpdateVehicleFuelDto,
  ): Promise<VehicleFuel> {
    const vehicleFuel = await this.vehicleFuelRepository.findByPk(id);

    if (vehicleFuel) {
      await vehicleFuel.update({ ...updateVehicleFuelDto });

      return vehicleFuel;
    }
  }

  async remove(id: number): Promise<VehicleFuel> {
    const vehicleFuel = await this.vehicleFuelRepository.findByPk(id);

    if (vehicleFuel) {
      await vehicleFuel.destroy();

      return vehicleFuel;
    }
  }
}
