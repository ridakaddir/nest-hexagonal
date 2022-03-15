import { Injectable } from '@nestjs/common';
import { Campaign } from 'src/campaigns/domain/model/campaign.model';
import { CampaignsRepository } from 'src/campaigns/domain/ports/campaigns.repository';

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
