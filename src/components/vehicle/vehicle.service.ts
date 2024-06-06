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

  ////// Dashboard Reports //////

  // Scorecard Reports
  async getTotalMaintenancesByYear(year: number): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetTotalMaintenancesByYear(${year})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  async getTotalMaintenancesByMonth(year: number, month: number): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetTotalMaintenancesByMonth(${year}, ${month})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  async getVehicleWithMostMaintenances(year: number): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetVehicleWithMostMaintenances(${year})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }
  // Scorecard Reports

  async getMaintenanceCountByVehicleType(year: number): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetMaintenanceCountByVehicleType(${year})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  async getVehicleMaintenancesByMonth(year: number): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetVehicleMaintenancesByMonth(${year})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  async getVehiclesWithMostMaintenances(year: number): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetVehiclesWithMostMaintenances(${year})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  async getVehicleUsageByVehicleType(year: number): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetVehicleUsageByVehicleType(${year})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  async getVehicleUsageByMonth(year: number): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetVehicleUsageByMonth(${year})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  async getVehicleWithMostUsage(year: number): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetVehicleWithMostUsage(${year})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  ////// Dashboard Reports //////

  ////// Cube Reports //////

  // Face 1: GetVehicleMaintenancesByMonthAndDepartment
  async getVehicleMaintenancesByMonthAndDepartment(
    year: number,
    departmentId: number,
  ): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetVehicleMaintenancesByMonthAndDepartment(${year}, ${departmentId})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  // Face 2: GetDepartmentMaintenancesByMonthAndVehicle
  async getDepartmentMaintenancesByMonthAndVehicle(
    year: number,
    vehiclePlates: string,
  ): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetDepartmentMaintenancesByMonthAndVehicle(${year}, '${vehiclePlates}')`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  async getMaintenancesInMonthByDepartmentAndVehicleType(
    year: number,
    departmentId: number,
  ): Promise<any> {
    return await this.vehicleRepository.sequelize.query(
      `CALL GetMaintenancesInMonthByDepartmentAndVehicleType(${year}, ${departmentId})`,
      {
        type: QueryTypes.RAW,
      },
    );
  }

  ////// Cube Reports //////

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
