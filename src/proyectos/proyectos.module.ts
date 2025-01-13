import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { CreateProyectoDto } from './newProyecto/create-proyecto'; 

@Controller('proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  @Post()
  create(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectosService.create(createProyectoDto);
  }

  @Get()
  findAll() {
    return this.proyectosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proyectosService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proyectosService.remove(+id);
  }
}
