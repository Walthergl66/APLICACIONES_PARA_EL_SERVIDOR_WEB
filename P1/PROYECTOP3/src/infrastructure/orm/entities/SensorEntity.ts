import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { ZonaCultivoEntity } from "./ZonaCultivoEntity";

@Entity("sensores")
export class SensorEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  tipo!: string;

  @Column()
  modelo!: string;

  @Column()
  unidadMedida!: string;

  @Column()
  estado!: 'activo' | 'inactivo' | 'mantenimiento';

  @Column()
  fechaUltimaLectura!: Date;

  @ManyToOne(() => ZonaCultivoEntity, (zona) => zona.sensores)
  @JoinColumn({ name: "zonaCultivoId" })
  zonaCultivo!: ZonaCultivoEntity;

  @Column()
  zonaCultivoId!: number;
}
