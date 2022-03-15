import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  type: string;
  startDate: Date;
  endDate: Date;
  salary: number;
}
