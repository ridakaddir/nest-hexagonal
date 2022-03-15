import { Logger, Module } from '@nestjs/common';
import { CampaignsController } from './adapters/api/campaigns.controller';
import { CampaignsApiService } from './adapters/api/campaignsApi.service';
import { CampaignsRepository } from './domain/ports/campaigns.repository';
import { CampaignsInMemory } from './adapters/campaignsdb/campaignsInMemory.repository';
import { CampaignsService } from './domain/ports/campaigns.service';

@Module({
  imports: [Logger],
  controllers: [CampaignsController],

  providers: [
    CampaignsService,
    CampaignsApiService,
    {
      provide: CampaignsRepository,
      useClass: CampaignsInMemory, // can add condition on ENV, inject mock impl for unit testing
    },
  ],
})
export class CampaignsModule {}
