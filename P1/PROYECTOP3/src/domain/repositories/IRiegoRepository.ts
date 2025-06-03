import { Riego } from "../entities/Riego";

export interface IRiegoRepository {
  findAll(): Promise<Riego[]>;
  findById(id: number): Promise<Riego | null>;
  save(riego: Riego): Promise<Riego>;
  update(id: number, riego: Riego): Promise<Riego>;
  delete(id: number): Promise<void>;
}
