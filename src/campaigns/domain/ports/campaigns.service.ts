import { Inject, Injectable } from '@nestjs/common';
import { Campaign } from '../model/campaign.model';
import { CampaignsRepository } from './campaigns.repository';

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
