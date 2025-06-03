import { IUsuarioRepository } from "../../../domain/repositories/IUsuarioRepository";
import { Usuario } from "../../../domain/entities/Usuario";
import { UsuarioEntity } from "../entities/UsuarioEntity";
import { UsuarioMapper } from "../mappers/UsuarioMapper";
import { AppDataSource } from "../../../interface/data-source";
import { Repository } from "typeorm";

export class UsuarioRepository implements IUsuarioRepository {
  private ormRepo: Repository<UsuarioEntity>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(UsuarioEntity);
  }

  async findAll(): Promise<Usuario[]> {
    const entities = await this.ormRepo.find();
    return entities.map(UsuarioMapper.toDomain);
  }

  async findById(id: number): Promise<Usuario | null> {
    const entity = await this.ormRepo.findOneBy({ id });
    return entity ? UsuarioMapper.toDomain(entity) : null;
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    const entity = await this.ormRepo.findOneBy({ email });
    return entity ? UsuarioMapper.toDomain(entity) : null;
  }

  async save(usuario: Usuario): Promise<Usuario> {
    const entity = UsuarioMapper.toEntity(usuario);
    const saved = await this.ormRepo.save(entity);
    return UsuarioMapper.toDomain(saved);
  }

  async update(id: number, usuario: Usuario): Promise<Usuario> {
    await this.ormRepo.update(id, UsuarioMapper.toEntity(usuario));
    const updated = await this.ormRepo.findOneBy({ id });
    if (!updated) throw new Error("Usuario no encontrado");
    return UsuarioMapper.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await this.ormRepo.delete(id);
  }
}
