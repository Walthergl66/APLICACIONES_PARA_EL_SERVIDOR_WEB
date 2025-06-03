import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RiegoEntity } from "./RiegoEntity" 
import { SensorEntity } from "./SensorEntity";

@Entity("zonas")
export class ZonaCultivoEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  ubicacion!: "Norte" | "Sur" | "Este" | "Oeste" | "Centro";

  @Column()
  tipoSuelo!: string;

  @Column()
  cultivoActual!: string;

  @OneToMany(() => SensorEntity, (sensor) => sensor.zonaCultivo)
  sensores!: SensorEntity[];

  @OneToMany(() => RiegoEntity, (riego) => riego.zonaCultivo)
  riegos!: RiegoEntity[];
}
