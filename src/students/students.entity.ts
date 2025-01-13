import { User } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne,JoinColumn     } from 'typeorm';
import { Proyecto } from 'src/proyectos/proyectos.entity';

@Entity()
export class Estudiante {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, { cascade: true })
    @JoinColumn()
    usuario: User;

    @Column()
    nombre: string;

    @Column()
    apellidos: string;

    @Column()
    carrera: string;

    @Column({ unique: true })
    correo: string;

    @Column({ unique: true })
    matricula: number;

    @Column({ unique: true })
    semestre: number;

    @Column({ nullable: true })
    informacion_perfil: string;

    @Column({ type: 'enum', enum: ['Aprobado', 'Pendiente'], default: 'Pendiente' })
    estado_documentos: string;

    @ManyToOne(() => Proyecto, (proyecto) => proyecto.estudiantes)
  proyecto: Proyecto;
    

}