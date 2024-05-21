import { DepartmentLoan } from './entities/department-loan.entity';

export const DepartmentLoanProvider = [
  {
    provide: 'DEPARTMENT_LOAN_REPOSITORY',
    useValue: DepartmentLoan,
  },
];
