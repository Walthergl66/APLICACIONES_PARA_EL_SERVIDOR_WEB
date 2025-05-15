import { AppDataSource } from "../data-source";
import { Cultivo } from "../models/cultivos";

export const insertCultivo = async (nombre: string, tipo: string, fechaSiembra: Date, fechaCosecha: Date) => {
    const cultivo1 = new Cultivo();
    cultivo1.nombre = nombre;
    cultivo1.tipoCultivo = tipo;
    cultivo1.fechaSiembra = fechaSiembra;
    cultivo1.fechaCosecha = fechaCosecha;
    cultivo1.zonaCultivo = "Zona 1"; 
    AppDataSource.manager.insert
    return await AppDataSource.manager.save(cultivo1);
}