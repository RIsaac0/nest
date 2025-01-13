/*import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RespuestasEncuesta } from './RespuestasEncuesta';

@Entity()
export class Encuestas {
  @PrimaryGeneratedColumn()
  id_encuesta: number;

  @Column()
  nombre_encuesta: string;

  @Column()
  descripcion_encuesta: string;

  @Column()
  tipo: string; // evaluación, retroalimentación

  @Column()
  fecha_inicio: Date;

  @Column()
  fecha_fin: Date;

  @OneToMany(() => RespuestasEncuesta, (respuesta) => respuesta.encuesta)
  respuestas: RespuestasEncuesta[];
}*/
