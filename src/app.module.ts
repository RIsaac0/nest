import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { Estudiante } from './students/students.entity';
import { Proyecto } from './proyectos/proyectos.entity';
import {  Empresas } from './company/companys.entity';
import { CarruselImagenes } from './carrusel-imagenes/carruse-imagenes.entity';
import { AsesoresAcademicos } from './asesores/asesores.entity';
import { Evaluaciones } from './evaluaciones/evaluaciones.entity';
import { ReportesAutomaticos } from './reportes/reportes.entity';
import { Documento } from './documents/documents.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestdb',
      entities: [User,Estudiante,Proyecto,Empresas,CarruselImagenes,AsesoresAcademicos,Evaluaciones,ReportesAutomaticos,Documento],
      synchronize: true,
    }), 
     UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
