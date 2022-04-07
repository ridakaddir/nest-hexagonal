import { Inject, Injectable } from '@nestjs/common';
import { Ticket } from '../model/ticket.model';
import { TicketRepository } from './ticket.repository';

@Injectable()
export class TicketService {
  constructor(
    @Inject(TicketRepository)
    private readonly tickerRepository: TicketRepository,
  ) {}

  create(description: string, priority: Number): Ticket {
    const ticket = new Ticket(description, priority);
    // TODO: check count of tickets less than 3
    if (this.findActiveTickets().length >= 3) {
      throw new Error('Ticket count is more than 3');
    }
    this.tickerRepository.create(ticket);
    return ticket;
  }

  findAll(): Ticket[] {
    return this.tickerRepository.findAll();
  }

  findActiveTickets(): Ticket[] {
    return this.tickerRepository.findAll().filter((ticket) => !ticket.isClosed);
  }
}
