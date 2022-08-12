import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StatusService } from './status.service';

@ApiTags('Status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  async findAll() {
    const status = await this.statusService.findAll();
    return status;
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const status = await this.statusService.findById(id);
    return status;
  }

  @Post(':title')
  async register(
    @Param('title') title: string
  ) {
    const status = await this.statusService.add(title);
    return status;
  }
}
