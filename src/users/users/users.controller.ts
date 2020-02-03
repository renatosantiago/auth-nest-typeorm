import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from '../user.entity';
import { UsersService } from './users.service'


@Controller('/users')
export class UsersController {

  constructor (private userService: UsersService){}

  @Get()
  index(): Promise<User[]> {
    return this.userService.findAll();
  }
  
  @Post('/create')
  async create(@Body() user: User): Promise<any> {
    return this.userService.create(user);
  }

  @Post('/find')
  async findOne(@Body() user: User): Promise<any> {
    return await this.userService.findByEmail(user.email);
  }
}
