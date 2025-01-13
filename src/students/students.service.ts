import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './students.entity'; 
import { CreateEstudianteDto } from './newStudent/create-student'; 

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private estudiantesRepository: Repository<Estudiante>,
  ) {}

  create(createEstudianteDto: CreateEstudianteDto) {
    const estudiante = this.estudiantesRepository.create(createEstudianteDto);
    return this.estudiantesRepository.save(estudiante);
  }

  findAll() {
    return this.estudiantesRepository.find();
  }

  findOne(id: number) {
    return this.estudiantesRepository.findOne({
      where: {id}, // Suponiendo que 'id' es el nombre del campo en la entidad Proyectos
    });
  }

  remove(id: number) {
    return this.estudiantesRepository.delete(id);
  }
}
