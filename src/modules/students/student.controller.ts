import { Controller, Get, Query } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(readonly studentService: StudentService) {}
  @Get('students-list')
  getStudents() {
    return this.studentService.getStudents();
  }
  @Get('find-all')
  findAll() {
    return this.studentService.findAll();
  }
  @Get('find-classes')
  findClasses() {
    return this.studentService.findClasses();
  }
  @Get('find-one')
  findOne(@Query() id) {
    return this.studentService.findOne(id);
  }
}
