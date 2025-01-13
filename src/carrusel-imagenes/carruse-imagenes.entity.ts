import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity'; 

@Entity()
export class CarruselImagenes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imagen_url: string;

  @Column()
  descripcion: string;

  @Column()
  fecha_subida: Date;

  @Column()
  estado: string; // activo, inactivo

  @ManyToOne(() => User, (usuario) => usuario.imagenes)
  administrador: User;
}
