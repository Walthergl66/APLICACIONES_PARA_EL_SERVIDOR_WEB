import {user} from "./models/user";
import 'reflect-metadata';
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Hola",   
    database: "practica", 
    synchronize: true,
    logging: false,
    entities: [user],
    subscribers: [],
    migrations: [],
});


