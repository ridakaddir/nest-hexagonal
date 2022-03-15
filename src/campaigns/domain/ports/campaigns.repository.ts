import { Campaign } from './campaigns.service';

export interface CampaignsRepository {
  create(campaign: Campaign): Campaign;

  findAll(): Campaign[];
}

export const CampaignsRepository = Symbol('CampaignsRepository');
