import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"; 

@Entity('cultivation_area')
export class CultivationArea {
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
