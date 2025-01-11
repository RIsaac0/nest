import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Empresas } from 'src/company/companys.entity';
import { Estudiante } from 'src/students/students.entity';

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  id_proyecto: number;

  @Column()
  nombre_proyecto: string;

  @Column('text')
  descripcion: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_publicacion: Date;

  @ManyToOne(() => Empresas, (empresa) => empresa.proyectos)
  empresa: Empresas;

  @OneToMany(() => Estudiante, (students) => students.proyecto)
  estudiantes: Estudiante[];
}