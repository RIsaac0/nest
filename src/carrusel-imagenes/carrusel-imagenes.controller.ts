import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CarruselImagenesService } from './carrusel-imagenes.service';
import { CreateCarruselImagenDto } from './newCarrusel/createCarrusel'; 

@Controller('carrusel-imagenes')
export class CarruselImagenesController {
  constructor(private readonly carruselImagenesService: CarruselImagenesService) {}

  @Post()
  create(@Body() createCarruselImagenDto: CreateCarruselImagenDto) {
    return this.carruselImagenesService.create(createCarruselImagenDto);
  }

  @Get()
  findAll() {
    return this.carruselImagenesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carruselImagenesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carruselImagenesService.remove(+id);
  }
}
