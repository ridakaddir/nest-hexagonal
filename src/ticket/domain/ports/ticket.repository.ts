import { Ticket } from '../model/ticket.model';

export interface TicketRepository {
  create(ticket: Ticket): Ticket;
  findAll(): Ticket[];
}

export const TicketRepository = Symbol('TicketRepository');
