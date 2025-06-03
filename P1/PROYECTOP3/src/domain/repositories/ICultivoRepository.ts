// src/domain/repositories/ICultivoRepository.ts

import { Cultivo } from "../entities/Cultivo";

export interface ICultivoRepository {
  findAll(): Promise<Cultivo[]>;
  findById(id: number): Promise<Cultivo | null>;
  save(cultivo: Cultivo): Promise<Cultivo>;
  update(id: number, cultivo: Cultivo): Promise<Cultivo>;
  delete(id: number): Promise<void>;
}
