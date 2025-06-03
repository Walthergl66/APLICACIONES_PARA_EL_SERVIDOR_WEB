import { IRiegoRepository } from "../../../domain/repositories/IRiegoRepository";
import { Riego } from "../../../domain/entities/Riego";
import { RiegoEntity } from "../entities/RiegoEntity";
import { RiegoMapper } from "../mappers/RiegoMapper";
import { AppDataSource } from "../../../interface/data-source";
import { Repository } from "typeorm";

export class RiegoRepository implements IRiegoRepository {
  private ormRepo: Repository<RiegoEntity>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(RiegoEntity);
  }

  async findAll(): Promise<Riego[]> {
    const entities = await this.ormRepo.find();
    return entities.map(RiegoMapper.toDomain);
  }

  async findById(id: number): Promise<Riego | null> {
    const entity = await this.ormRepo.findOneBy({ id });
    return entity ? RiegoMapper.toDomain(entity) : null;
  }

  async save(riego: Riego): Promise<Riego> {
    const entity = RiegoMapper.toEntity(riego);
    const saved = await this.ormRepo.save(entity);
    return RiegoMapper.toDomain(saved);
  }

  async update(id: number, riego: Riego): Promise<Riego> {
    await this.ormRepo.update(id, RiegoMapper.toEntity(riego));
    const updated = await this.ormRepo.findOneBy({ id });
    if (!updated) throw new Error("Riego no encontrado");
    return RiegoMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await this.ormRepo.delete(id);
  }
}
