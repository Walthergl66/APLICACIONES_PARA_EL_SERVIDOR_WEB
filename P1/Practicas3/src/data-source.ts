import {User} from "./models/user";
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { View } from "./models/view";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Hola",   
    database: "practica", 
    synchronize: true,
    logging: false,
    entities: [User, View],
    subscribers: [],
    migrations: [],
});


