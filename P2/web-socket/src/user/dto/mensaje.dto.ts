import { IsString, MinLength } from "class-validator"


export class MensajeDto {
  @IsString()
  @MinLength(1)
  contenido: string;
}