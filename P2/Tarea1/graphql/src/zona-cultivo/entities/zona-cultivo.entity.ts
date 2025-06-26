import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'Zona-Cultivo'} )
export class ZonaCultivo {

  @PrimaryGeneratedColumn('uuid')
  @Field (() => ID)
  id: String;

 @Column()
 @Field (() =>String)
  nombre!: string;

  @Column()
  ubicacion!: "Norte" | "Sur" | "Este" | "Oeste" | "Centro"; 

  @Column()
  @Field (() =>String)
  tipoSuelo!: string; 

  @Column()
  @Field (() =>String)
  cultivoActual!: string;

}