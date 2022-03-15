import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CampaignsRepository } from './campaigns.repository';

export class Campaign {
  private id: string;
  name: string;
  type: string;
  startDate: Date;
  endDate: Date;
  value: Number;

  constructor(
    name: string,
    type: string,
    startDate: Date,
    endDate: Date,
    value: Number,
  ) {
    this.id = randomUUID();
    this.name = name;
    this.type = type;
    this.startDate = startDate;
    this.endDate = endDate;
    this.value = value;
  }
}

@Injectable()
export class CampaignsService {
  constructor(
    @Inject(CampaignsRepository)
    private readonly campaignsRepository: CampaignsRepository,
  ) {}

  create(
    name: string,
    type: string,
    startDate: Date,
    endDate: Date,
    value: Number,
  ): Campaign {
    const campaign = new Campaign(name, type, startDate, endDate, value);
    this.campaignsRepository.create(campaign);
    return campaign;
  }

  findAll(): Campaign[] {
    return this.campaignsRepository.findAll();
  }
}
