import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { type } from 'os';
import { CampaignsService, Campaign } from './campaigns.service';
import { CreateCampaignDto } from './dto/CreateCampaignDto';

@Controller({
    path: 'campaigns',
    version: ['1']
})
export class CampaignsController {

    private readonly logger = new Logger(CampaignsController.name);

    constructor(private campaignsService: CampaignsService) { }

    @Get()
    findAll(): any[] {
        return this.campaignsService.findAll();
    }

    @Post()
    create(@Body() createCampaignDto: CreateCampaignDto): any {

        const campaign = this.campaignsService.create(createCampaignDto.name, 'createCampaignDto.type', new Date(), new Date(), 900);
        this.logger.debug(createCampaignDto);
        return { ...createCampaignDto };
    }
}

