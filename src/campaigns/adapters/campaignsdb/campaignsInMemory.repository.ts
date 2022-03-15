import { Injectable } from '@nestjs/common';
import { CampaignsRepository } from 'src/campaigns/domain/ports/campaigns.repository';
import { Campaign } from 'src/campaigns/domain/ports/campaigns.service';

@Injectable()
export class CampaignsInMemory implements CampaignsRepository {
  private readonly campaigns: Campaign[] = [];

  create(campaign: Campaign): Campaign {
    this.campaigns.push(campaign);
    return campaign;
  }

  findAll(): Campaign[] {
    return this.campaigns;
  }
}
