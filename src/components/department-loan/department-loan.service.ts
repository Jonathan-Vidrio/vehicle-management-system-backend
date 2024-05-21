import { Inject, Injectable } from '@nestjs/common';
import { CreateDepartmentLoanDto } from './dto/create-department-loan.dto';
import { UpdateDepartmentLoanDto } from './dto/update-department-loan.dto';
import { DepartmentLoan } from './entities/department-loan.entity';

@Injectable()
export class DepartmentLoanService {
  constructor(
    @Inject('DEPARTMENT_LOAN_REPOSITORY')
    private departmentLoanRepository: typeof DepartmentLoan,
  ) {}

  async create(
    createDepartmentLoanDto: CreateDepartmentLoanDto,
  ): Promise<DepartmentLoan> {
    return await this.departmentLoanRepository.create({
      ...createDepartmentLoanDto,
    });
  }

  async findAll(): Promise<DepartmentLoan[]> {
    return await this.departmentLoanRepository.findAll();
  }

  async findOne(id: number): Promise<DepartmentLoan> {
    return await this.departmentLoanRepository.findByPk(id);
  }

  async update(
    id: number,
    updateDepartmentLoanDto: UpdateDepartmentLoanDto,
  ): Promise<DepartmentLoan> {
    const departmentLoan = await this.departmentLoanRepository.findByPk(id);

    if (departmentLoan) {
      await departmentLoan.update({ ...updateDepartmentLoanDto });

      return departmentLoan;
    }
  }

  async remove(id: number): Promise<DepartmentLoan> {
    const departmentLoan = await this.departmentLoanRepository.findByPk(id);

    if (departmentLoan) {
      await departmentLoan.destroy();

      return departmentLoan;
    }
  }
}
