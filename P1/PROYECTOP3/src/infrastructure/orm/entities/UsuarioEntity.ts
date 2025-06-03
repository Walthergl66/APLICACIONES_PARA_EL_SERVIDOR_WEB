import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column() 
  username!: string;

  @Column()
  password!: string;

  @Column()
  email!: string;

  @Column()
  role!: string;

}