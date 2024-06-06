import { Department } from './entities/department.entity';

export const DepartmentProvider = [
  {
    provide: 'DEPARTMENT_REPOSITORY',
    useValue: Department,
  },
];
