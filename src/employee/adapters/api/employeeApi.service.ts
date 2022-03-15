import { Injectable } from '@nestjs/common';
import { Employee } from 'src/employee/domain/model/employee.model';
import { EmployeeService } from 'src/employee/domain/ports/employee.service';
import { CreateEmployeeDto } from './dto/createEmployee.dto';

@Injectable()
export class EmployeeApiService {
  constructor(private employeeService: EmployeeService) {}

  create(createEmployeeDto: CreateEmployeeDto): Employee {
    return this.employeeService.create(
      createEmployeeDto.name,
      createEmployeeDto.type,
      createEmployeeDto.startDate,
      createEmployeeDto.endDate,
      createEmployeeDto.salary,
    );
  }

  findAll(): Employee[] {
    return this.employeeService.findAll();
  }
}
