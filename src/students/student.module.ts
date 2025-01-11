
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './students.service'; 
import { UsersModule } from 'src/users/users.module';
import { studentsController } from './students.controller';
import { Estudiante } from './students.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Estudiante]),UsersModule ],
    controllers: [studentsController],
    providers: [StudentsService],
  })
  export class studentModule {}