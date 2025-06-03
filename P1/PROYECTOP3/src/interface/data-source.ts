import {CultivoEntity} from '../infrastructure/orm/entities/cultivosEntity';
import { UsuarioEntity } from '../infrastructure/orm/entities/UsuarioEntity';
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
    entities: [CultivoEntity, UsuarioEntity],
    subscribers: [],
    migrations: [],
});


