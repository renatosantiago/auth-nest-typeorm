import { Controller, Get, Post, Body } from '@nestjs/common';
import { PermitionsService } from './permitions.service';
import { Permition } from '../permition.entity';

@Controller('/permitions')
export class PermitionsController {

  constructor (private permitionsService: PermitionsService){}

  @Get()
  async index(): Promise<Permition[]> {
    return this.permitionsService.findAll();
  }

  @Post('/create')
  async create(@Body() permition: Permition): Promise<any> {
    console.log('PermitionController');
    return this.permitionsService.create(permition);
  } 

}
