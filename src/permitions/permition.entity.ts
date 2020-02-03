import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Permition {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

}