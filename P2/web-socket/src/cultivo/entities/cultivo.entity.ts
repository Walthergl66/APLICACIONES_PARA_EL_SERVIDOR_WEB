import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'Cultivos'} )
export class Cultivos {

  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  nombre!: string;

  @Column()
  tipoCultivo!: string;

  @Column()
  zonaCultivo!: string;

  @Column()
  fechaSiembra: Date;

  @Column()
  fechaCosecha: Date;

}