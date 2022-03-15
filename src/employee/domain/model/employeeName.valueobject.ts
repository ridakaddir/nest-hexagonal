import { BadRequestException } from '@nestjs/common';

export class EmployeeName {
  private value: string;

  private constructor(value: string) {
    if (value == 'c1') {
      throw new BadRequestException('value not valid');
    }

    this.value = value;
  }

  public static of(name: string) {
    return new EmployeeName(name);
  }

  public get(): string {
    return this.value;
  }
}
