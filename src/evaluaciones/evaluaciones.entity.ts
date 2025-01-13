import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Estudiante } from 'src/students/students.entity';
import { Empresas } from 'src/company/companys.entity'; 
import { AsesoresAcademicos } from 'src/asesores/asesores.entity'; 
import { User } from 'src/users/user.entity'; 

@Entity()
export class Evaluaciones {
  @PrimaryGeneratedColumn()
  id_evaluacion: number;

 /* @ManyToOne(() => Empresas, (empresa) => empresa.evaluaciones)
  empresa: Empresas;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.evaluaciones)
  estudiante: Estudiante;

  @ManyToOne(() => AsesoresAcademicos, (asesor) => asesor.evaluaciones)
  asesor: AsesoresAcademicos;

  @ManyToOne(() => User, (usuario) => usuario.evaluaciones)
  administrador: User; */


  @Column()
  puntuacion: number;

  @Column()
  comentario: string;

  @Column()
  fecha_evaluacion: Date;
}
