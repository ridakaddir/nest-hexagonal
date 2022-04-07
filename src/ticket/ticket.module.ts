import { Logger, Module } from '@nestjs/common';
import { TicketController } from './adapters/api/ticket.controller';
import { TicketApiService } from './adapters/api/ticketApi.service';
import { TicketRepository } from './domain/ports/ticket.repository';
import { TicketInMemory } from './adapters/db/ticketInMemory.repository';
import { TicketService } from './domain/ports/ticket.service';

@Module({
  imports: [Logger],
  controllers: [TicketController],

  providers: [
    TicketService,
    TicketApiService,
    {
      provide: TicketRepository,
      useClass: TicketInMemory, // can add condition on ENV, inject mock impl for unit testing
    },
  ],
})
export class TicketModule {}
