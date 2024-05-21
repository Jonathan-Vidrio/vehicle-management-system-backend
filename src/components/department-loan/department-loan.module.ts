import { Module } from '@nestjs/common';
import { DepartmentLoanService } from './department-loan.service';
import { DepartmentLoanController } from './department-loan.controller';
import { DatabaseModule } from '../../database/database.module';
import { DepartmentLoanProvider } from './department-loan.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [DepartmentLoanController],
  providers: [...DepartmentLoanProvider, DepartmentLoanService],
})
export class DepartmentLoanModule {}
