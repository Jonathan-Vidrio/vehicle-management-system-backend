import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentProvider } from './department.provider';

@Module({
  controllers: [DepartmentController],
  providers: [...DepartmentProvider, DepartmentService],
})
export class DepartmentModule {}
