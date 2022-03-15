import { Logger, Module } from '@nestjs/common';
import { EmployeeController } from './adapters/api/employee.controller';
import { EmployeeApiService } from './adapters/api/employeeApi.service';
import { EmployeeRepository } from './domain/ports/employee.repository';
import { EmployeeInMemory } from './adapters/employeedb/employeeInMemory.repository';
import { EmployeeService } from './domain/ports/employee.service';

@Module({
  imports: [Logger],
  controllers: [EmployeeController],

  providers: [
    EmployeeService,
    EmployeeApiService,
    {
      provide: EmployeeRepository,
      useClass: EmployeeInMemory, // can add condition on ENV, inject mock impl for unit testing
    },
  ],
})
export class EmployeeModule {}
