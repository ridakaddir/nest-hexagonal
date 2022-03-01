import { Logger, Module } from '@nestjs/common';
import { CampaignsController } from './campaigns.controller';
import { CampaignsService } from './campaigns.service';

@Module({

  imports: [Logger],
  controllers: [CampaignsController],


  providers: [CampaignsService]
})
export class CampaignsModule { }
