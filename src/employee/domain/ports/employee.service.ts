import { Inject, Injectable } from '@nestjs/common';
import { Employee } from '../model/employee.model';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository,
  ) {}

  create(
    name: string,
    type: string,
    startDate: Date,
    endDate: Date,
    salary: Number,
  ): Employee {
    const employee = new Employee(name, type, startDate, endDate, salary);
    this.employeeRepository.create(employee);
    return employee;
  }

  findAll(): Employee[] {
    return this.employeeRepository.findAll();
  }
}
