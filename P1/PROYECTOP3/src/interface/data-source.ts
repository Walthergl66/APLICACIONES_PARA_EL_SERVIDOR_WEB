import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { CultivoEntity } from "../infrastructure/orm/entities/cultivosEntity"; 
import { RiegoEntity } from "../infrastructure/orm/entities/RiegoEntity";
import { UsuarioEntity } from "../infrastructure/orm/entities/UsuarioEntity";
import { ZonaCultivoEntity } from "../infrastructure/orm/entities/ZonaCultivoEntity";
import { SensorEntity } from "../infrastructure/orm/entities/SensorEntity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [CultivoEntity,
    RiegoEntity,
    UsuarioEntity,
    ZonaCultivoEntity,
    SensorEntity],
  synchronize: true, // Solo en desarrollo
});
