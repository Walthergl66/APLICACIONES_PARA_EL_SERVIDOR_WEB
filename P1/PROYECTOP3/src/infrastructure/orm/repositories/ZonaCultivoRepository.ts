import { IZonaCultivoRepository } from "../../../domain/repositories/IZonaCultivoRepository";
import { ZonaCultivo } from "../../../domain/entities/ZonaCultivo";
import { ZonaCultivoEntity } from "../entities/ZonaCultivoEntity";
import { ZonaCultivoMapper } from "../mappers/ZonaCultivoMapper";
import { AppDataSource } from "../../../interface/data-source";
import { Repository } from "typeorm";

export class ZonaCultivoRepository implements IZonaCultivoRepository {
  private ormRepo: Repository<ZonaCultivoEntity>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(ZonaCultivoEntity);
  }

  async findAll(): Promise<ZonaCultivo[]> {
    const entities = await this.ormRepo.find();
    return entities.map(ZonaCultivoMapper.toDomain);
  }

  async findById(id: number): Promise<ZonaCultivo | null> {
    const entity = await this.ormRepo.findOneBy({ id });
    return entity ? ZonaCultivoMapper.toDomain(entity) : null;
  }

  async save(zona: ZonaCultivo): Promise<ZonaCultivo> {
    const entity = ZonaCultivoMapper.toEntity(zona);
    const saved = await this.ormRepo.save(entity);
    return ZonaCultivoMapper.toDomain(saved);
  }

  async update(id: number, zona: ZonaCultivo): Promise<ZonaCultivo> {
    await this.ormRepo.update(id, ZonaCultivoMapper.toEntity(zona));
    const updated = await this.ormRepo.findOneBy({ id });
    if (!updated) throw new Error("Zona de cultivo no encontrada");
    return ZonaCultivoMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await this.ormRepo.delete(id);
  }
}
