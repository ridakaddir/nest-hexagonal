import { BadRequestException } from '@nestjs/common';
import { randomUUID } from 'crypto';

export class CampaignName {
  private value: string;

  private constructor(value: string) {
    if (value == 'c1') {
      throw new BadRequestException('value not valid');
    }

    this.value = value;
  }

  public static of(name: string) {
    return new CampaignName(name);
  }

  public get(): string {
    return this.value;
  }
}
