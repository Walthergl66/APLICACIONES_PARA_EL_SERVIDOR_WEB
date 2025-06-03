import { Sensor } from "../entities/Sensor";

export interface ISensorRepository {
  findAll(): Promise<Sensor[]>;
  findById(id: number): Promise<Sensor | null>;
  save(sensor: Sensor): Promise<Sensor>;
  update(id: number, sensor: Sensor): Promise<Sensor>;
  delete(id: number): Promise<void>;
}
