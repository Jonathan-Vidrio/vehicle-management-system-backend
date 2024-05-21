import { Inject, Injectable } from '@nestjs/common';
import { CreateVehicleMaintenanceDto } from './dto/create-vehicle-maintenance.dto';
import { UpdateVehicleMaintenanceDto } from './dto/update-vehicle-maintenance.dto';
import { VehicleMaintenance } from './entities/vehicle-maintenance.entity';

@Injectable()
export class VehicleMaintenanceService {
  constructor(
    @Inject('VEHICLE_MAINTENANCE_REPOSITORY')
    private vehicleMaintenanceRepository: typeof VehicleMaintenance,
  ) {}

  async create(
    createVehicleMaintenanceDto: CreateVehicleMaintenanceDto,
  ): Promise<VehicleMaintenance> {
    return await this.vehicleMaintenanceRepository.create({
      ...createVehicleMaintenanceDto,
    });
  }

  async findAll(): Promise<VehicleMaintenance[]> {
    return await this.vehicleMaintenanceRepository.findAll();
  }

  async findOne(id: number): Promise<VehicleMaintenance> {
    return await this.vehicleMaintenanceRepository.findByPk(id);
  }

  async update(
    id: number,
    updateVehicleMaintenanceDto: UpdateVehicleMaintenanceDto,
  ): Promise<VehicleMaintenance> {
    const vehicleMaintenance =
      await this.vehicleMaintenanceRepository.findByPk(id);

    if (vehicleMaintenance) {
      await vehicleMaintenance.update({ ...updateVehicleMaintenanceDto });

      return vehicleMaintenance;
    }
  }

  async remove(id: number): Promise<VehicleMaintenance> {
    const vehicleMaintenance =
      await this.vehicleMaintenanceRepository.findByPk(id);

    if (vehicleMaintenance) {
      await vehicleMaintenance.destroy();

      return vehicleMaintenance;
    }
  }
}
