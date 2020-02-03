import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import { Permition } from '../permition.entity';

@Injectable()
export class PermitionsService {

  constructor(
    @InjectRepository(Permition)
    private permitionsRepository: Repository<Permition>,
  ){}


  async findAll(): Promise<Permition[]> {
    return this.permitionsRepository.find();
  }

  async create(permition: Permition): Promise<Permition> {
    return await this.permitionsRepository.save(permition);
  }

}
