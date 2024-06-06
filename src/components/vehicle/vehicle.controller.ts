import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleService.create(createVehicleDto);
  }

  @Get()
  findAll(): Promise<Vehicle[]> {
    return this.vehicleService.findAll();
  }

  @Get('details/:id')
  findOne(@Param('id') id: string): Promise<Vehicle> {
    return this.vehicleService.findOne(+id);
  }

  @Get('usage-peak/:year')
  getVehicleUsagePeak(@Param('year') year: number): Promise<any> {
    return this.vehicleService.getVehicleUsagePeak(year);
  }

  @Get('fuel-consumption/:year')
  getFuelConsumption(@Param('year') year: number): Promise<any> {
    return this.vehicleService.getFuelConsumption(year);
  }

  ////// Dashboard Reports //////

  // Scorecard Reports
  @Get('total-maintenances-by-year/:year')
  getTotalMaintenancesByYear(@Param('year') year: number): Promise<any> {
    return this.vehicleService.getTotalMaintenancesByYear(year);
  }

  @Get('total-maintenances-by-month/:year/:month')
  getTotalMaintenancesByMonth(
    @Param('year') year: number,
    @Param('month') month: number,
  ): Promise<any> {
    return this.vehicleService.getTotalMaintenancesByMonth(year, month);
  }

  @Get('vehicle-with-most-maintenances/:year')
  getTotalMaintenancesByVehicleType(@Param('year') year: number): Promise<any> {
    return this.vehicleService.getVehicleWithMostMaintenances(year);
  }
  // Scorecard Reports

  @Get('vehicle-maintenance-by-vehicle-type/:year')
  getMaintenanceCountByVehicleType(@Param('year') year: number): Promise<any> {
    return this.vehicleService.getMaintenanceCountByVehicleType(year);
  }

  @Get('vehicle-maintenances-by-month/:year')
  getVehicleMaintenancesByMonth(@Param('year') year: number): Promise<any> {
    return this.vehicleService.getVehicleMaintenancesByMonth(year);
  }

  @Get('vehicles-with-most-maintenances/:year')
  getVehiclesWithMostMaintenances(@Param('year') year: number): Promise<any> {
    return this.vehicleService.getVehiclesWithMostMaintenances(year);
  }

  @Get('vehicle-usage-by-vehicle-type/:year')
  getVehicleUsageByVehicleType(@Param('year') year: number): Promise<any> {
    return this.vehicleService.getVehicleUsageByVehicleType(year);
  }

  @Get('vehicle-usage-by-month/:year')
  getVehicleUsageByMonth(@Param('year') year: number): Promise<any> {
    return this.vehicleService.getVehicleUsageByMonth(year);
  }

  @Get('vehicle-with-most-usage/:year')
  getVehicleWithMostUsage(@Param('year') year: number): Promise<any> {
    return this.vehicleService.getVehicleWithMostUsage(year);
  }

  ////// Dashboard Reports //////

  ////// Cube Reports //////

  @Get(
    'vehicle-maintenances-by-month-and-department/year/:year/departmentId/:departmentId',
  )
  getVehicleMaintenancesByMonthAndDepartment(
    @Param('year') year: number,
    @Param('departmentId') departmentId: number,
  ): Promise<any> {
    return this.vehicleService.getVehicleMaintenancesByMonthAndDepartment(
      year,
      departmentId,
    );
  }

  @Get(
    'department-maintenances-by-month-and-vehicle/year/:year/vehiclePlates/:vehiclePlates',
  )
  getDepartmentMaintenancesByMonthAndVehicle(
    @Param('year') year: number,
    @Param('vehiclePlates') vehiclePlates: string,
  ): Promise<any> {
    return this.vehicleService.getDepartmentMaintenancesByMonthAndVehicle(
      year,
      vehiclePlates,
    );
  }

  @Get(
    'maintenances-in-month-by-department-and-vehicle-type/year/:year/departmentId/:departmentId',
  )
  getMaintenancesInMonthByDepartmentAndVehicleType(
    @Param('year') year: number,
    @Param('departmentId') departmentId: number,
  ): Promise<any> {
    return this.vehicleService.getMaintenancesInMonthByDepartmentAndVehicleType(
      year,
      departmentId,
    );
  }

  ////// Cube Reports //////

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ): Promise<Vehicle> {
    return this.vehicleService.update(+id, updateVehicleDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string): Promise<Vehicle> {
    return this.vehicleService.remove(+id);
  }
}
