import { Injectable } from '@nestjs/common';
import { Campaign } from 'src/campaigns/domain/model/campaign.model';
import { CampaignsService } from 'src/campaigns/domain/ports/campaigns.service';
import { CreateCampaignDto } from './dto/CreateCampaignDto';

@Injectable()
export class CampaignsApiService {
  constructor(private campaignsService: CampaignsService) {}

  create(createCampaignDto: CreateCampaignDto): Campaign {
    return this.campaignsService.create(
      createCampaignDto.name,
      createCampaignDto.type,
      createCampaignDto.startDate,
      createCampaignDto.endDate,
      createCampaignDto.value,
    );
  }

  findAll(): Campaign[] {
    return this.campaignsService.findAll();
  }
}
