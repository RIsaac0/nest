import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsesoresAcademicos } from './asesores.entity'; 
import { AsesoresAcademicosService } from './asesores.service';
import { AsesoresAcademicosController } from './asesores.controller'; 

@Module({
  imports: [TypeOrmModule.forFeature([AsesoresAcademicos])],
  providers: [AsesoresAcademicosService],
  controllers: [AsesoresAcademicosController],
})
export class AsesoresAcademicosModule {}
