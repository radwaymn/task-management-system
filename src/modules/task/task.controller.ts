import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TaskDto } from './dto/task.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { TaskService } from './task.service';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll() {
    const task = await this.taskService.findAll();
    return task;
  }

  @Post()
  async add(@Body() taskDto: TaskDto) {
    const task = await this.taskService.add(taskDto);
    return task;
  }

  @Put()
  async update(@Body() taskDto: UpdateTaskDto) {
    const task = await this.taskService.update(taskDto);
    return task;
  }
}
