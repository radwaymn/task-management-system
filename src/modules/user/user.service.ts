import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  async findAll() {
    const users = await UserEntity.find({ relations: ['tasks'] });
    return users;
  }

  async findById(id: number) {
    const user = await UserEntity.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async register(userDto: UserDto) {
    const { username, password } = userDto;

    const oldUser = await UserEntity.findOne({ where: { username } });

    if (oldUser) {
      throw new BadRequestException('User already exists');
    }

    const user = new UserEntity();

    user.username = username;
    user.password = bcrypt.hashSync(password, 10);

    await user.save();

    return 'Register success';
  }

  async login(userDto: UserDto) {
    const { username, password } = userDto;

    const user = await UserEntity.findOne({
      where: { username },
      select: ['username', 'password'],
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const isCorrectPassword = bcrypt.compareSync(password, user.password);

    if (!isCorrectPassword) {
      throw new UnauthorizedException();
    }

    return 'Login success';
  }
}
