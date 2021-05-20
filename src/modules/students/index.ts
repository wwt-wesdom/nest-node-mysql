import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Classes } from './classes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Classes])],
  controllers: [StudentController],
  providers: [StudentService],
})
export default class StudentsModule {}
