import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'Usuarios'} )
export class Ciudadano {

  @PrimaryGeneratedColumn('uuid')
  @Field (() => ID)
  id: String;

  @Column()
  @Field (() =>String)
  cedula: String;

  @Column( )
  @Field (() =>String)
  nombre: String;

  @Column( )
  @Field (() =>String)
  email: String;

  @Column( )
  @Field (() =>String)
  password: String;


}
