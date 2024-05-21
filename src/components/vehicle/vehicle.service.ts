import { Inject, Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { QueryTypes } from 'sequelize';

@Injectable()
export class VehicleService {
  constructor(
    @Inject('VEHICLE_REPOSITORY')
    private vehicleRepository: typeof Vehicle,
  ) {}

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return await this.vehicleRepository.create({
      ...createVehicleDto,
    });
  }

  async findAll(): Promise<Vehicle[]> {
    return await this.vehicleRepository.findAll();
  }

  async findOne(id: number): Promise<Vehicle> {
    return await this.vehicleRepository.findByPk(id);
  }

  async getVehicleUsagePeak(year: number): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetVehicleUsagePeak(${year})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  async getFuelConsumption(year: number): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetFuelConsumption(${year})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  async update(
    id: number,
    updateVehicleDto: UpdateVehicleDto,
  ): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findByPk(id);

    if (vehicle) {
      await vehicle.update({ ...updateVehicleDto });

      return vehicle;
    }
  }

  async remove(id: number): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findByPk(id);

    if (vehicle) {
      await vehicle.destroy();

      return vehicle;
    }
  }
}
