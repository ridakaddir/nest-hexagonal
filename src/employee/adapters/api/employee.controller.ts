import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { type } from 'os';
import { EmployeeApiService } from './employeeApi.service';
import { EmployeeCommand } from './employee.command';

@Controller({
  path: 'employees',
  version: ['1'],
})
export class EmployeeController {
  private readonly logger = new Logger(EmployeeController.name);

  constructor(private employeeApiService: EmployeeApiService) {}

  @Get()
  findAll(): any[] {
    return this.employeeApiService.findAll();
  }

  @Post()
  create(@Body() employeeCommand: EmployeeCommand): any {
    const employee = this.employeeApiService.create(employeeCommand);
    this.logger.debug(employeeCommand);
    this.logger.debug({ employee });
    return { ...employee };
  }
}
