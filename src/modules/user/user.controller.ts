import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return users;
  }

  @Post()
  async register(
    @Body() userDto: UserDto
  ) {
    const user = await this.userService.register(userDto);
    return user;
  }

  @HttpCode(200)
  @Post('login')
  async login(
    @Body() userDto: UserDto
  ) {
    const user = await this.userService.login(userDto);
    return user;
  }
}
