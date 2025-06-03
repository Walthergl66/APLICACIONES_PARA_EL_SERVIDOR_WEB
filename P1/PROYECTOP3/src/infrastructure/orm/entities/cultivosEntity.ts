import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class CultivoEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  tipoCultivo!: string;

  @Column()
  zonaCultivo!: string;

  @Column()
  fechaSiembra!: Date;

}




