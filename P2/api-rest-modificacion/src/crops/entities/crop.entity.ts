import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Crops")
export class Crop {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cropType: string;

    @Column()
    cultivationArea: string;

    @Column()
    plantingDate: Date;
}
