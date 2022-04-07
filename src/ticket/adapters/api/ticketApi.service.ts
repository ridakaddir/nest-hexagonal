import { Injectable } from '@nestjs/common';
import { Ticket } from 'src/ticket/domain/model/ticket.model';
import { TicketService } from 'src/ticket/domain/ports/ticket.service';
import { TicketCommand } from './ticket.command';

@Injectable()
export class TicketApiService {
  constructor(private ticketService: TicketService) {}

  create(tickerCommand: TicketCommand): Ticket {
    return this.ticketService.create(
      tickerCommand.description,
      tickerCommand.priority,
    );
  }

  findAll(): Ticket[] {
    return this.ticketService.findAll();
  }
}
