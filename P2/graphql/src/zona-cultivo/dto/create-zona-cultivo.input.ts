import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateZonaCultivoInput {
  
  @Field (() =>String)
  @IsString()
  @IsNotEmpty()
  nombre!: string;
  
  @Field (() =>String)
  @IsString()
  ubicacion!: "Norte" | "Sur" | "Este" | "Oeste" | "Centro"; 
  
  @Field (() =>String)
  @IsString()
  tipoSuelo!: string; 

  @Field (() =>String)
  @IsString()
  cultivoActual!: string;

}

