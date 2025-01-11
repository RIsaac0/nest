import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresas } from './companys.entity';
import { CreateEmpresaDto } from './newCompany/create-company'; 

@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(Empresas)
    private empresasRepository: Repository<Empresas>,
  ) {}

  create(createEmpresaDto: CreateEmpresaDto) {
    const empresa = this.empresasRepository.create(createEmpresaDto);
    return this.empresasRepository.save(empresa);
  }

  findAll() {
    return this.empresasRepository.find();
  }

  findOne(id: number) {
    return this.empresasRepository.findOne({
      where: { id_empresa: id }, // Suponiendo que 'id' es el nombre del campo en la entidad Empresas
    });
  }
  

  remove(id: number) {
    return this.empresasRepository.delete(id);
  }
}
