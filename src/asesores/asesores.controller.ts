import { Controller, Post, Get, Param, Delete, Body, ParseIntPipe } from '@nestjs/common';
import { AsesoresAcademicosService } from './asesores.service';
import { CreateAsesorAcademicoDto } from './newAsesor/create-asesor'; 

@Controller('asesores-academicos')
export class AsesoresAcademicosController {
  constructor(private asesoresService: AsesoresAcademicosService) {}

  @Post()
  createAsesor(@Body() asesorDto: CreateAsesorAcademicoDto) {
    return this.asesoresService.createAsesor(asesorDto);
  }

  @Get()
  findAll() {
    return this.asesoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.asesoresService.findOne(id);
  }

  @Delete(':id')
  deleteAsesor(@Param('id', ParseIntPipe) id: number) {
    return this.asesoresService.deleteAsesor(id);
  }
}
