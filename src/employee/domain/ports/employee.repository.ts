import { Employee } from '../model/employee.model';

export interface EmployeeRepository {
  create(employee: Employee): Employee;

  findAll(): Employee[];
}

export const EmployeeRepository = Symbol('EmployeeRepository');
