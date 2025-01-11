import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { Estudiante } from './students/students.entity';
import { Proyecto } from './proyectos/proyectos.entity';
import {  Empresas } from './company/companys.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestdb',
      entities: [User,Estudiante,Proyecto,Empresas],
      synchronize: true,
    }), 
     UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
