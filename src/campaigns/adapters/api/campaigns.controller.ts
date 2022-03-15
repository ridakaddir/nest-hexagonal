import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { type } from 'os';
import { CampaignsApiService } from './campaignsApi.service';
import { CreateCampaignDto } from './dto/CreateCampaignDto';

@Controller({
  path: 'campaigns',
  version: ['1'],
})
export class CampaignsController {
  private readonly logger = new Logger(CampaignsController.name);

  constructor(private campaignsApiService: CampaignsApiService) {}

  @Get()
  findAll(): any[] {
    return this.campaignsApiService.findAll();
  }

  @Post()
  create(@Body() createCampaignDto: CreateCampaignDto): any {
    const campaign = this.campaignsApiService.create(createCampaignDto);
    this.logger.debug(createCampaignDto);
    this.logger.debug({ campaign });
    return { ...campaign };
  }
}
