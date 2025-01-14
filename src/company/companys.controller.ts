import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EmpresasService } from './companys.service'; 
import { CreateEmpresaDto } from './newCompany/create-company'; 

@Controller('empresas')
export class EmpresasController {
  constructor(private empresasService: EmpresasService) {}

  @Post()
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresasService.create(createEmpresaDto);
  }

  @Get()
  findAll() {
    return this.empresasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresasService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresasService.remove(+id);
  }
}
