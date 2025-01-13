import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Empresas } from 'src/company/companys.entity';
import { Estudiante } from 'src/students/students.entity';

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Empresas, (empresa) => empresa.proyectos)
  empresa: Empresas;

  @Column()
  nombre_proyecto: string;

  @Column()
  descripcion_proyecto: string;

  @Column()
  fecha_publicacion: Date;

  @Column()
  fecha_limite: Date;

  @Column()
  estado: string; // activo, cerrado

  @OneToMany(() => Estudiante, (estudiante) => estudiante.proyecto)
  estudiantes: Estudiante[];
}