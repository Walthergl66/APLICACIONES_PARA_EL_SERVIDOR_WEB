import { InputType,  Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCiudadanoInput {

  @Field (() =>String)
  @IsString()
  @IsNotEmpty()
  cedula: string;

  @Field (() =>String)
  @IsString()
  nombre: string;

  @Field (() =>String)
  @IsString()
  email: string;

  @Field (() =>String)
  @IsString()
  password:string;


}
