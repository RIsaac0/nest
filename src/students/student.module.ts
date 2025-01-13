import { Module } from '@nestjs/common';
import { EstudiantesService } from './students.service'; 
import { EstudiantesController } from './students.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './students.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante])],
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
})
export class EstudiantesModule {}
