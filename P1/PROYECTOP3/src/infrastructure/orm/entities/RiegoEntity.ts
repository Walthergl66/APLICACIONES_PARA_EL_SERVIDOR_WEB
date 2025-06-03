import {Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { ZonaCultivoEntity } from "./ZonaCultivoEntity";

@Entity("riegos")
export class RiegoEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  cantidadAgua!: number;

  @Column()
  fecha!: Date;

  @Column()
  duracionMinutos!: number;

  @Column()
  volumenLitros!: number;

  @Column()
  activadoAutomaticamente!: boolean;

  @ManyToOne(() => ZonaCultivoEntity, (zona) => zona.riegos)
  @JoinColumn({ name: "zonaCultivoId" })
  zonaCultivo!: ZonaCultivoEntity;

  @Column()
  zonaCultivoId!: number;
}
