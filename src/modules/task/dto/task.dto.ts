import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class TaskDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    userId: number;
    
    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    @IsInt()
    statusId: number;
}