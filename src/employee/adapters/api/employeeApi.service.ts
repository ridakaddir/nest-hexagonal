import { Injectable } from '@nestjs/common';
import { Employee } from 'src/employee/domain/model/employee.model';
import { EmployeeService } from 'src/employee/domain/ports/employee.service';
import { EmployeeCommand } from './employee.command';

@Injectable()
export class EmployeeApiService {
  constructor(private employeeService: EmployeeService) {}

  create(employeeCommand: EmployeeCommand): Employee {
    return this.employeeService.create(
      employeeCommand.name,
      employeeCommand.type,
      employeeCommand.startDate,
      employeeCommand.endDate,
      employeeCommand.salary,
    );
  }

  findAll(): Employee[] {
    return this.employeeService.findAll();
  }
}
