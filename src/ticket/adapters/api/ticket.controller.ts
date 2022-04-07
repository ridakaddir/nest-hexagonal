import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { TicketService } from 'src/ticket/domain/ports/ticket.service';

import { TicketCommand } from './ticket.command';

@Controller({
  path: 'tickets',
  version: ['1'],
})
export class TicketController {
  private readonly logger = new Logger(TicketController.name);

  constructor(private ticketService: TicketService) {}

  @Get()
  findAll(): any[] {
    return this.ticketService.findAll();
  }

  @Post()
  create(@Body() tickeCommand: TicketCommand): any {
    const ticker = this.ticketService.create(
      tickeCommand.description,
      tickeCommand.priority,
    );
    this.logger.debug(tickeCommand);
    this.logger.debug({ ticker });
    return { ...ticker };
  }
}
