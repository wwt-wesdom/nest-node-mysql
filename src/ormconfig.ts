import { Student } from './modules/students/student.entity';
import { Classes } from './modules/students/classes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

export default function ormConfig() {
  return TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'test',
    entities: [Student, Classes],
    synchronize: true,
  });
}
