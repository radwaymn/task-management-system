import { Injectable, NotFoundException } from '@nestjs/common';
import { StatusService } from '../status/status.service';
import { UserService } from '../user/user.service';
import { TaskDto } from './dto/task.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    private readonly userService: UserService,
    private readonly statusService: StatusService,
  ) {}

  async findAll() {
    const tasks = await TaskEntity.find({ relations: ['user', 'status'] });
    return tasks;
  }

  async add(taskDto: TaskDto) {
    const { title, userId, statusId } = taskDto;

    const user = await this.userService.findById(userId);
    const status = await this.statusService.findById(statusId? statusId : 1);
    const task = new TaskEntity();

    task.title = title;
    task.user = user;
    task.status = status;

    await task.save();
    return task;
  }

  async update(taskDto: UpdateTaskDto) {
    const { id, userId, statusId } = taskDto;

    const user = await this.userService.findById(userId);
    const status = await this.statusService.findById(statusId);
    const task = await TaskEntity.findOne({where: {id}});

    if(!task) {
        throw new NotFoundException();
    }
    
    task.status = status;

    await task.save();
    return task;
  }
}
