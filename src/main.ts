import { Module, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CampaignsModule } from './campaigns/campaigns.module';
import helmet from 'helmet';


@Module({
  imports: [CampaignsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: console
  });
  app.useGlobalPipes(new ValidationPipe(
    { whitelist: true }
  ));
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // app.use(helmet());


  await app.listen(3000);
}
bootstrap();
