import { randomUUID } from 'crypto';
import { EmployeeName } from './employeeName.valueobject';

export class Employee {
  private id: string;
  name: EmployeeName;
  type: string;
  startDate: Date;
  endDate: Date;
  salary: Number;

  constructor(
    name: string,
    type: string,
    startDate: Date,
    endDate: Date,
    salary: Number,
  ) {
    this.id = randomUUID();
    this.name = EmployeeName.of(name);
    this.type = type;
    this.startDate = startDate;
    this.endDate = endDate;
    this.salary = salary;
  }
}
