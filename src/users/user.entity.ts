
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nombre: string;

  @Column()
  Apellido: string;
  
  @Column({ unique: true })
  email: string;  // Nuevo campo
  
  @Column()
  password: string;  // Nuevo campo para la contraseña (opcional si se autentica con Auth0)
  
  @Column()
  rol: string; // 'estudiante', 'asesor', 'empresa', 'administrador'
 
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_registro: Date;
    @Column()
    empresa: string;  
}
