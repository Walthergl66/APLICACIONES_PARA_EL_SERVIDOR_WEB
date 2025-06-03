// src/infrastructure/orm/repositories/CultivoRepository.ts

import { ICultivoRepository } from "../../../domain/repositories/ICultivoRepository";
import { Cultivo } from "../../../domain/entities/Cultivo";
import { CultivoEntity } from "../entities/cultivosEntity";
import { AppDataSource } from "../../../interface/data-source";
import { CultivoMapper } from "../mappers/CultivoMapper";
import { Repository } from "typeorm";

export class CultivoRepository implements ICultivoRepository {
  private ormRepo: Repository<CultivoEntity>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(CultivoEntity);
  }

  async findAll(): Promise<Cultivo[]> {
    const entities = await this.ormRepo.find();
    return entities.map(CultivoMapper.toDomain);
  }

  async findById(id: number): Promise<Cultivo | null> {
    const entity = await this.ormRepo.findOneBy({ id });
    return entity ? CultivoMapper.toDomain(entity) : null;
  }

  async save(cultivo: Cultivo): Promise<Cultivo> {
    const entity = CultivoMapper.toEntity(cultivo);
    const saved = await this.ormRepo.save(entity);
    return CultivoMapper.toDomain(saved);
  }

  async update(id: number, cultivo: Cultivo): Promise<Cultivo> {
    await this.ormRepo.update(id, CultivoMapper.toEntity(cultivo));
    const updated = await this.ormRepo.findOneBy({ id });
    if (!updated) throw new Error("Cultivo no encontrado");
    return CultivoMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await this.ormRepo.delete(id);
  }
}
