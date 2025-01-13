import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './proyectos.entity';
import { CreateProyectoDto } from './newProyecto/create-proyecto'; 

@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyecto)
    private proyectosRepository: Repository<Proyecto>,
  ) {}

  create(createProyectoDto: CreateProyectoDto) {
    const proyecto = this.proyectosRepository.create(createProyectoDto);
    return this.proyectosRepository.save(proyecto);
  }

  findAll() {
    return this.proyectosRepository.find();
  }

  findOne(id: number) {
    return this.proyectosRepository.findOne({
      where: {id}, // Suponiendo que 'id' es el nombre del campo en la entidad Proyectos
    });
  }

  remove(id: number) {
    return this.proyectosRepository.delete(id);
  }
}