// documentos.controller.ts
import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { DocumentosService } from './documents.service'; 
import { Documento } from './documents.entity'; 

@Controller('documentos')
export class DocumentosController {
  constructor(private readonly documentosService: DocumentosService) {}

  @Post()
  async registrarDocumento(
    @Body() datos: Partial<Documento>,
  ): Promise<Documento> {
    return this.documentosService.crearDocumento(datos);
  }

  @Get()
  async obtenerDocumentos(): Promise<Documento[]> {
    return this.documentosService.listarDocumentos();
  }

  @Patch(':id')
  async cambiarEstado(
    @Param('id') id: number,
    @Body('estado') estado: 'Aprobado' | 'Pendiente',
  ): Promise<Documento> {
    return this.documentosService.actualizarEstadoDocumento(id, estado);
  }
}
