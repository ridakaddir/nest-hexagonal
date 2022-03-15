import { Campaign } from '../model/campaign.model';

export interface CampaignsRepository {
  create(campaign: Campaign): Campaign;

  findAll(): Campaign[];
}

export const CampaignsRepository = Symbol('CampaignsRepository');
