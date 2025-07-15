import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"; 

@Entity('Zona_Cultivo')
export class ZonaCultivo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  location!: string;

  @Column()
  soilType!: string;

  @Column()
  currentCrop!: string; 
}
