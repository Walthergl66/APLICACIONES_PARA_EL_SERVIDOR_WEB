import { ZonaCultivo } from "../entities/ZonaCultivo";

export interface IZonaCultivoRepository {
  findAll(): Promise<ZonaCultivo[]>;
  findById(id: number): Promise<ZonaCultivo | null>;
  save(zona: ZonaCultivo): Promise<ZonaCultivo>;
  update(id: number, zona: ZonaCultivo): Promise<ZonaCultivo>;
  delete(id: number): Promise<void>;
}
