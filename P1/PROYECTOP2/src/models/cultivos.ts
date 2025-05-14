import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Cultivo {
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

  @Column()
  fechaCosecha!: Date;



//   @OneToMany(() => View, (view: View) => view.users)
//   views!: View[];
}
