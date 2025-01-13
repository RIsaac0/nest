import { Module } from '@nestjs/common';
import { CarruselImagenesService } from './carrusel-imagenes.service';
import { CarruselImagenesController } from './carrusel-imagenes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarruselImagenes } from './carruse-imagenes.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([CarruselImagenes])],
  controllers: [CarruselImagenesController],
  providers: [CarruselImagenesService],
})  
export class CarruselImagenesModule {}
