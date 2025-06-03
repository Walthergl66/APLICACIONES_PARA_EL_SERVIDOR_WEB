import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity("cultivos")
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




