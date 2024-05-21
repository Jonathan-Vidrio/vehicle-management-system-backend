import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import { ConfigService } from '@nestjs/config';
import { Department } from '../components/department/entities/department.entity';
import { DepartmentLoan } from '../components/department-loan/entities/department-loan.entity';
import { FuelType } from '../components/fuel-type/entities/fuel-type.entity';
import { Job } from '../components/job/entities/job.entity';
import { Status } from '../components/status/entities/status.entity';
import { Vehicle } from '../components/vehicle/entities/vehicle.entity';
import { VehicleFuel } from '../components/vehicle-fuel/entities/vehicle-fuel.entity';
import { VehicleMaintenance } from '../components/vehicle-maintenance/entities/vehicle-maintenance.entity';
import { VehicleType } from '../components/vehicle-type/entities/vehicle-type.entity';
import { VehicleUsage } from '../components/vehicle-usage/entities/vehicle-usage.entity';
import { Worker } from '../components/worker/entities/worker.entity';

export const DatabaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      let sequelize = new Sequelize({
        dialect: configService.get<string>('DB_DIALECT') as Dialect,
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
      });

      await sequelize.query(
        `CREATE DATABASE IF NOT EXISTS \`${configService.get<string>('DB_DATABASE')}\`;`,
      );
      await sequelize.close();

      sequelize = new Sequelize({
        dialect: (configService.get<string>('DB_DIALECT') ||
          'mysql') as Dialect,
        host: configService.get<string>('DB_HOST') || 'localhost',
        port: +configService.get<number>('DB_PORT') || 3306,
        username: configService.get<string>('DB_USERNAME') || 'root',
        password: configService.get<string>('DB_PASSWORD') || '',
        database: configService.get<string>('DB_DATABASE') || 'vehicles',
      });

      sequelize.addModels([
        Department,
        DepartmentLoan,
        FuelType,
        Job,
        Status,
        Vehicle,
        VehicleFuel,
        VehicleMaintenance,
        VehicleType,
        VehicleUsage,
        Worker,
      ]);

      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
