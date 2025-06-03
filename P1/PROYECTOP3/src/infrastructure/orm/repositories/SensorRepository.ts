import { ISensorRepository } from "../../../domain/repositories/ISensorRepository";
import { Sensor } from "../../../domain/entities/Sensor";
import { SensorEntity } from "../entities/SensorEntity";
import { SensorMapper } from "../mappers/SensorMapper";
import { AppDataSource } from "../../../interface/data-source";
import { Repository } from "typeorm";

export class SensorRepository implements ISensorRepository {
  private ormRepo: Repository<SensorEntity>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(SensorEntity);
  }

  async findAll(): Promise<Sensor[]> {
    const entities = await this.ormRepo.find();
    return entities.map(SensorMapper.toDomain);
  }

  async findById(id: number): Promise<Sensor | null> {
    const entity = await this.ormRepo.findOneBy({ id });
    return entity ? SensorMapper.toDomain(entity) : null;
  }

  async save(sensor: Sensor): Promise<Sensor> {
    const entity = SensorMapper.toEntity(sensor);
    const saved = await this.ormRepo.save(entity);
    return SensorMapper.toDomain(saved);
  }

  async update(id: number, sensor: Sensor): Promise<Sensor> {
    await this.ormRepo.update(id, SensorMapper.toEntity(sensor));
    const updated = await this.ormRepo.findOneBy({ id });
    if (!updated) throw new Error("Sensor no encontrado");
    return SensorMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await this.ormRepo.delete(id);
  }
}
