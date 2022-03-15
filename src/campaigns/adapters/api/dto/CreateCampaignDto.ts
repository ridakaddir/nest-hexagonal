import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateCampaignDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    type: string;
    startDate: Date;
    endDate: Date;
    value: number;


}