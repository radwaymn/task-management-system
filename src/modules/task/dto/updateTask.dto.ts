import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateTaskDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    userId: number;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    statusId: number;
}