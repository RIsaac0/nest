import { IsString, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateProyectoDto{

   
      nombre_proyecto: string;
    
     
      descripcion_proyecto: string;
    
      
      fecha_publicacion: Date;
    
     
      fecha_limite: Date;
    
    
      estado: string; // activo, cerrado

      @IsNumber()
      @IsOptional()
      empresaId?: number; // Relación opcional con Empresas
}