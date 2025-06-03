import {CultivoEntity} from '../infrastructure/orm/entities/cultivosEntity';
import { UsuarioEntity } from '../infrastructure/orm/entities/UsuarioEntity';
import { RiegoEntity } from '../infrastructure/orm/entities/RiegoEntity';
import { SensorEntity } from '../infrastructure/orm/entities/SensorEntity';
import { ZonaCultivoEntity } from '../infrastructure/orm/entities/ZonaCultivoEntity';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
// import { View } from "./models/view";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Hola",   
    database: "cultivodb", 
    synchronize: true,
    logging: true,
    entities: [CultivoEntity, UsuarioEntity, RiegoEntity, SensorEntity, ZonaCultivoEntity],
    subscribers: [],
    migrations: [],
});


