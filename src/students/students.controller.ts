import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EstudiantesService } from './students.service';
import { CreateEstudianteDto } from './newStudent/create-student'; 

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Post()
  create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudiantesService.create(createEstudianteDto);
  }

  @Get()
  findAll() {
    return this.estudiantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudiantesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudiantesService.remove(+id);
  }
}
