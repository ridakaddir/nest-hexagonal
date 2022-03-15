import { randomUUID } from 'crypto';
import { CampaignName } from './campaignName.valueobject';

export class Campaign {
  private id: string;
  name: CampaignName;
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
    this.name = CampaignName.of(name);
    this.type = type;
    this.startDate = startDate;
    this.endDate = endDate;
    this.value = value;
  }
}
