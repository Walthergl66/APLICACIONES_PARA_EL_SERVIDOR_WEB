import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCultivoInput {

  @Field (() =>String)
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Field (() =>String)
  @IsString()
  tipoCultivo!: string;

  @Field (() =>String)
  @IsString()
  zonaCultivo!: string;

  @Field (() =>Date)
  @IsDate()
  fechaSiembra!: Date;

  @Field (() =>Date)
  @IsDate()
  fechaCosecha!: Date;

}
