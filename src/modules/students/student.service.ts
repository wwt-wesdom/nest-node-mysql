import { Injectable } from '@nestjs/common';
import { createResData, ResData } from '../../utils/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { Classes } from './classes.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,

    @InjectRepository(Classes)
    private classesRepository: Repository<Classes>,
  ) {}

  getStudents() {
    return createResData([]);
  }

  async findAll(): Promise<ResData> {
    const result = await this.studentRepository.query('select * from student');
    return createResData(result);
  }

  async findClasses() {
    const result = await this.classesRepository.find();
    return createResData(result);
  }

  async findOne(id: string): Promise<ResData> {
    const result = await this.studentRepository.findOne(id);
    return createResData(result);
  }

  async remove(id: string): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
