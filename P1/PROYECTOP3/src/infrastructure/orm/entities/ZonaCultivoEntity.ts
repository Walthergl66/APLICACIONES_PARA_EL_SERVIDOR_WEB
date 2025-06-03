// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { Sensor } from "./Sensor"; // Ajustar si existe
// import { Riego } from "./Riego";   // Ajustar si existe


// export class ZonaCultivoEntity {
//   @PrimaryGeneratedColumn()
//   id!: number;

//   @Column()
//   nombre!: string;

//   @Column()
//   ubicacion!: "Norte" | "Sur" | "Este" | "Oeste" | "Centro";

//   @Column()
//   tipoSuelo!: string;

//   @Column()
//   cultivoActual!: string;

//   @OneToMany(() => Sensor, (sensor) => sensor.zonaCultivo)
//   sensores!: Sensor[];

//   @OneToMany(() => Riego, (riego) => riego.zonaCultivo)
//   riegos!: Riego[];
// }
