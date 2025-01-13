import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Estudiante } from 'src/students/students.entity';

@Entity('Documentos')
export class Documento {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Estudiante, (estudiante) => estudiante.id, { onDelete: 'CASCADE' })
    estudiante: Estudiante;

    @Column({ type: 'enum', enum: ['Carta_Presentacion', 'Solicitud', 'Anteproyecto'] })
    tipo_documento: string;

    @Column()
    url_archivo: string;

    @Column({ type: 'enum', enum: ['Aprobado', 'Pendiente'], default: 'Pendiente' })
    estado: string;
    
}
    