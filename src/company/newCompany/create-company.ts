// create-empresa.dto.ts
import { IsString, IsDate, IsOptional, IsEmail } from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  nombre_empresa: string; // Nombre de la empresa

  @IsString()
  direccion: string; // Dirección de la empresa

  @IsString()
  contacto: string; // Información de contacto (puede ser teléfono, email, etc.)

  @IsString()
  descripcion: string; // Descripción de la empresa

  @IsDate()
  fecha_registro: Date; // Fecha de registro de la empresa

  @IsOptional()
  usuarioId?: number; // Id del usuario asociado a la empresa, debe ser opcional

  // No es necesario incluir los proyectos en el DTO, ya que se relacionan con la empresa.
}
