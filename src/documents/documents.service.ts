// documentos.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Documento } from './documents.entity'; 

@Injectable()
export class DocumentosService {
  constructor(
    @InjectRepository(Documento)
    private readonly documentosRepository: Repository<Documento>,
  ) {}

  async crearDocumento(documento: Partial<Documento>): Promise<Documento> {
    const nuevoDocumento = this.documentosRepository.create(documento);
    return this.documentosRepository.save(nuevoDocumento);
  }

  async listarDocumentos(): Promise<Documento[]> {
    return this.documentosRepository.find({ relations: ['estudiante'] });
  }

  async actualizarEstadoDocumento(
    id: number,
    estado: 'Aprobado' | 'Pendiente',
  ): Promise<Documento> {
    const documento = await this.documentosRepository.findOne({ where: { id } });
    if (!documento) {
      throw new Error('Documento no encontrado');
    }
    documento.estado = estado;
    return this.documentosRepository.save(documento);
  }
}
