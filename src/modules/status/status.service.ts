import { Injectable, NotFoundException } from '@nestjs/common';
import { StatusEntity } from './status.entity';

@Injectable()
export class StatusService {
  async findAll() {
    const status = await StatusEntity.find();
    return status;
  }

  async findById(id: number) {
    const status = await StatusEntity.findOne({ where: { id } });
    if (!status) {
      throw new NotFoundException();
    }
    return status;
  }

  async add(title: string) {
    const status = new StatusEntity();
    status.title = title;
    await status.save();
    return status;
  }
}
