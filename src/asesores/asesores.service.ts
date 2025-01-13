import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsesoresAcademicos } from './asesores.entity'; 
import { CreateAsesorAcademicoDto } from './newAsesor/create-asesor'; 

@Injectable()
export class AsesoresAcademicosService {
  constructor(
    @InjectRepository(AsesoresAcademicos)
    private asesoresRepository: Repository<AsesoresAcademicos>,
  ) {}

  async createAsesor(asesorDto: CreateAsesorAcademicoDto): Promise<AsesoresAcademicos> {
    const nuevoAsesor = this.asesoresRepository.create(asesorDto);
    return this.asesoresRepository.save(nuevoAsesor);
  }

  async findAll(): Promise<AsesoresAcademicos[]> {
    return this.asesoresRepository.find();
  }

  async findOne(id: number): Promise<AsesoresAcademicos> {
    return this.asesoresRepository.findOne({ where: { id_asesor: id } });
  }

  async deleteAsesor(id: number): Promise<void> {
    await this.asesoresRepository.delete(id);
  }
}
