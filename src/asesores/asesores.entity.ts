import { Entity, PrimaryGeneratedColumn, Column, OneToOne,JoinColumn } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class AsesoresAcademicos {
  @PrimaryGeneratedColumn()
  id_asesor: number;

  @OneToOne(() => User, (usuario) => usuario.asesor)
  @JoinColumn()
  usuario: User;

  @Column()
  titulo: string;

  @Column()
  departamento: string;

  @Column()
  fecha_registro: Date;
}
