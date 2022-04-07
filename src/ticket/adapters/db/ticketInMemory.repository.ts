import { Injectable } from '@nestjs/common';
import { Ticket } from 'src/ticket/domain/model/ticket.model';
import { TicketRepository } from 'src/ticket/domain/ports/ticket.repository';

@Injectable()
export class TicketInMemory implements TicketRepository {
  private readonly tickets: Ticket[] = [];

  create(ticket: Ticket): Ticket {
    this.tickets.push(ticket);
    return ticket;
  }

  findAll(): Ticket[] {
    return this.tickets;
  }
}
