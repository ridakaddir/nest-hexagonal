import { Injectable } from '@nestjs/common';
import { Employee } from 'src/employee/domain/model/employee.model';
import { EmployeeRepository } from 'src/employee/domain/ports/employee.repository';

@Injectable()
export class EmployeeInMemory implements EmployeeRepository {
  private readonly employees: Employee[] = [];

  create(employee: Employee): Employee {
    this.employees.push(employee);
    return employee;
  }

  findAll(): Employee[] {
    return this.employees;
  }
}
