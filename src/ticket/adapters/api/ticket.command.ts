import { IsNotEmpty } from 'class-validator';

export class TicketCommand {
  @IsNotEmpty()
  description: string;
  priority: Number = 1;
}
