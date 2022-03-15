import { Logger, Module } from '@nestjs/common';
import { CampaignsController } from './adapters/api/campaigns.controller';
import { CampaignsApiService } from './adapters/api/campaignsApi.service';
import { CampaignsInMemory } from './adapters/campaignsdb/campaignsInMemory.repository';
import { CampaignsRepository } from './domain/ports/campaigns.repository';
import { CampaignsService } from './domain/ports/campaigns.service';

@Module({
  imports: [Logger],
  controllers: [CampaignsController],

  providers: [
    CampaignsService,
    CampaignsApiService,
    {
      provide: CampaignsRepository,
      useClass: CampaignsInMemory,
    },
  ],
})
export class CampaignsModule {}
