// documentos.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentosController } from './documents.controller';
import { DocumentosService } from './documents.service'; 
import { Documento } from './documents.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Documento])],
  controllers: [DocumentosController],
  providers: [DocumentosService],
})
export class DocumentosModule {}
