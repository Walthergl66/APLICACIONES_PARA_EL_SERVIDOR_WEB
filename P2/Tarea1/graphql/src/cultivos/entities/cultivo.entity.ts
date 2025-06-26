import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'Cultivos'} )
export class Cultivos {

  @PrimaryGeneratedColumn('uuid')
  @Field (() => ID)
  id: String;

  @Column()
  @Field (() =>String)
  nombre!: string;

  @Column()
  @Field (() =>String)
  tipoCultivo!: string;

  @Column()
  @Field (() =>String)
  zonaCultivo!: string;

  @Column()
  @Field (() =>Date)
  fechaSiembra: Date;

  @Column()
  @Field (() =>Date)
  fechaCosecha: Date;

}