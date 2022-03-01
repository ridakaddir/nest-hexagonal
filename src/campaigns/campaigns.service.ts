import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

export class Campaign {
    private id: string;
    name: string;
    type: string;
    startDate: Date;
    endDate: Date;
    value: Number;

    constructor(name: string, type: string, startDate: Date, endDate: Date, value: Number) {
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

    private readonly campaigns: Campaign[] = [];

    create(name: string, type: string, startDate: Date, endDate: Date, value: Number): Campaign {


        const campaign = new Campaign(name, type, startDate, endDate, value);
        this.campaigns.push(campaign);
        return campaign;
    }

    findAll(): Campaign[] {
        return this.campaigns;
    }

}
