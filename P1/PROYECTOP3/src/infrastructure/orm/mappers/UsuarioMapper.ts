import { Usuario } from "../../../domain/entities/Usuario";
import { UsuarioEntity } from "../entities/UsuarioEntity";

export class UsuarioMapper {
  static toDomain(entity: UsuarioEntity): Usuario {
    return new Usuario(entity.id, entity.username, entity.password, entity.email, entity.role);
  }

  static toEntity(domain: Usuario): UsuarioEntity {
    const entity = new UsuarioEntity();
    entity.id = domain.id;
    entity.username = domain.username;
    entity.password = domain.password;
    entity.email = domain.email;
    entity.role = domain.role;
    return entity;
  }
}
