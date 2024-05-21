import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DepartmentModule } from './components/department/department.module';
import { JobModule } from './components/job/job.module';
import { StatusModule } from './components/status/status.module';
import { WorkerModule } from './components/worker/worker.module';
import { VehicleTypeModule } from './components/vehicle-type/vehicle-type.module';
import { VehicleModule } from './components/vehicle/vehicle.module';
import { FuelTypeModule } from './components/fuel-type/fuel-type.module';
import { VehicleFuelModule } from './components/vehicle-fuel/vehicle-fuel.module';
import { VehicleMaintenanceModule } from './components/vehicle-maintenance/vehicle-maintenance.module';
import { VehicleUsageModule } from './components/vehicle-usage/vehicle-usage.module';
import { DepartmentLoanModule } from './components/department-loan/department-loan.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    DepartmentModule,
    JobModule,
    StatusModule,
    WorkerModule,
    VehicleTypeModule,
    VehicleModule,
    FuelTypeModule,
    VehicleFuelModule,
    VehicleMaintenanceModule,
    VehicleUsageModule,
    DepartmentLoanModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
