import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarruselImagenes } from './carruse-imagenes.entity'; 
import { CreateCarruselImagenDto } from './newCarrusel/createCarrusel';

@Injectable()
export class CarruselImagenesService {
  constructor(
    @InjectRepository(CarruselImagenes)
    private carruselImagenesRepository: Repository<CarruselImagenes>,
  ) {}

  create(createCarruselImagenDto: CreateCarruselImagenDto) {
    const imagen = this.carruselImagenesRepository.create(createCarruselImagenDto);
    return this.carruselImagenesRepository.save(imagen);
  }

  findAll() {
    return this.carruselImagenesRepository.find();
  }

  findOne(id: number) {
    return this.carruselImagenesRepository.findOne({
      where: {id}, // Suponiendo que 'id' es el nombre del campo en la entidad Proyectos
    });
  }

  remove(id: number) {
    return this.carruselImagenesRepository.delete(id);
  }
}
