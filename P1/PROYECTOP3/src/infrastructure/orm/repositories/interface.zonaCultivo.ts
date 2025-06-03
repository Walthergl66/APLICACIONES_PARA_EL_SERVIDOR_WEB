// domain/repositories/IZonaCultivoRepository.ts
import { ZonaCultivo } from "../../../models/zonaCultivo";

export interface IZonaCultivoRepository {
  findAll(): Promise<ZonaCultivo[]>;
  findById(id: number): Promise<ZonaCultivo | null>;
  create(zona: ZonaCultivo): Promise<ZonaCultivo>;
  update(id: number, data: Partial<ZonaCultivo>): Promise<ZonaCultivo>;
  delete(id: number): Promise<void>;
}
