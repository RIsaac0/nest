import { Module } from '@nestjs/common';
import { EmpresasService } from './companys.service'; 
import { EmpresasController } from './companys.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresas } from './companys.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Empresas])],
  controllers: [EmpresasController],
  providers: [EmpresasService],
})
export class EmpresasModule {}
