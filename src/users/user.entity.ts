import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Estudiante } from 'src/students/students.entity'; 
import { Empresas } from 'src/company/companys.entity';
import { AsesoresAcademicos } from 'src/asesores/asesores.entity'; 
import { CarruselImagenes } from 'src/carrusel-imagenes/carruse-imagenes.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  correo_electronico: string;

  @Column()
  contrasena: string;

  @Column()
  rol: string; // Estudiante, Asesor Académico, Empresa, Administrador

  @Column()
  fecha_registro: Date;

  @Column()
  estado: string; // activo, inactivo

  @OneToOne(() => Estudiante, (estudiante) => estudiante.usuario)
  @JoinColumn()
  estudiante: Estudiante;

  @OneToOne(() => Empresas, (empresa) => empresa.usuario)
  @JoinColumn()
  empresa: Empresas;

  @OneToOne(() => AsesoresAcademicos, (asesor) => asesor.usuario)
  @JoinColumn()
  asesor: AsesoresAcademicos;

  @OneToMany(() => CarruselImagenes, (imagen) => imagen.administrador)
  imagenes: CarruselImagenes[];
}
