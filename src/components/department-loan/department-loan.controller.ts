import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartmentLoanService } from './department-loan.service';
import { CreateDepartmentLoanDto } from './dto/create-department-loan.dto';
import { UpdateDepartmentLoanDto } from './dto/update-department-loan.dto';

@Controller('department-loan')
export class DepartmentLoanController {
  constructor(private readonly departmentLoanService: DepartmentLoanService) {}

  @Post()
  create(
    @Body() createDepartmentLoanDto: CreateDepartmentLoanDto,
  ): Promise<CreateDepartmentLoanDto> {
    return this.departmentLoanService.create(createDepartmentLoanDto);
  }

  @Get()
  findAll(): Promise<CreateDepartmentLoanDto[]> {
    return this.departmentLoanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CreateDepartmentLoanDto> {
    return this.departmentLoanService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartmentLoanDto: UpdateDepartmentLoanDto,
  ): Promise<CreateDepartmentLoanDto> {
    return this.departmentLoanService.update(+id, updateDepartmentLoanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<CreateDepartmentLoanDto> {
    return this.departmentLoanService.remove(+id);
  }
}
