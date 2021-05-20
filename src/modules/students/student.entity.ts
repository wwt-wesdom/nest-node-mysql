import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  class_id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  score: number;
}
