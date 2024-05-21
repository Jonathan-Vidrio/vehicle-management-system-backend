import { Inject, Injectable } from '@nestjs/common';
import { CreateVehicleUsageDto } from './dto/create-vehicle-usage.dto';
import { UpdateVehicleUsageDto } from './dto/update-vehicle-usage.dto';
import { VehicleUsage } from './entities/vehicle-usage.entity';

@Injectable()
export class VehicleUsageService {
  constructor(
    @Inject('VEHICLE_USAGE_REPOSITORY')
    private vehicleUsageRepository: typeof VehicleUsage,
  ) {}

  async create(
    createVehicleUsageDto: CreateVehicleUsageDto,
  ): Promise<VehicleUsage> {
    return await this.vehicleUsageRepository.create({
      ...createVehicleUsageDto,
    });
  }

  async findAll(): Promise<VehicleUsage[]> {
    return await this.vehicleUsageRepository.findAll();
  }

  async findOne(id: number): Promise<VehicleUsage> {
    return await this.vehicleUsageRepository.findByPk(id);
  }

  async update(
    id: number,
    updateVehicleUsageDto: UpdateVehicleUsageDto,
  ): Promise<VehicleUsage> {
    const vehicleUsage = await this.vehicleUsageRepository.findByPk(id);

    if (vehicleUsage) {
      await vehicleUsage.update({ ...updateVehicleUsageDto });

      return vehicleUsage;
    }
  }

  async remove(id: number): Promise<VehicleUsage> {
    const vehicleUsage = await this.vehicleUsageRepository.findByPk(id);

    if (vehicleUsage) {
      await vehicleUsage.destroy();

      return vehicleUsage;
    }
  }
}
