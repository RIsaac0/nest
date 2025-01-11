import { Entity, PrimaryGeneratedColumn, Column, OneToOne,JoinColumn,OneToMany } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Proyecto } from 'src/proyectos/proyectos.entity'; 

@Entity()
export class Empresas {
  @PrimaryGeneratedColumn()
  id_empresa: number;

  @OneToOne(() => User, (usuario) => usuario.empresa)
  @JoinColumn()
  usuario: User;

  @Column()
  nombre_empresa: string;

  @Column()
  direccion: string;

  @Column()
  contacto: string;

  @Column()
  descripcion: string;

  @Column()
  fecha_registro: Date;

  @OneToMany(() => Proyecto, (proyecto) => proyecto.empresa)
  proyectos: Proyecto[];
}
