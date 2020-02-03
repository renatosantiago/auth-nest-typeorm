import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Permition } from '../permitions/permition.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string

  @ManyToMany(type => Permition)
  @JoinTable()
  permitions: Permition[];
}