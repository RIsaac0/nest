import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ReportesAutomaticos {
  @PrimaryGeneratedColumn()
  id_reporte: number;

  @Column()
  tipo_reporte: string; // por estudiante, por proyecto

  @Column()
  contenido: string; // PDF o enlace

  @Column()
  fecha_generacion: Date;
}
