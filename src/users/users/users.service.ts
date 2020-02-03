import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import { User } from '../user.entity';
import { Permition } from '../../permitions/permition.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,) { }



  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findByEmail(email: string) : Promise<any | undefined> {
    const user = await this.userRepository.createQueryBuilder("user")
          .leftJoinAndSelect("user.permitions","permition", "permition.id = user.id")
          .where("user.email = :email", {email: email})          
          .getOne();
    return user;
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.userRepository.update(user.id, user);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }

}