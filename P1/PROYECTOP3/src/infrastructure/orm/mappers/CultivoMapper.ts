// src/infrastructure/orm/repositories/CultivoRepository.ts

import { Cultivo } from "../../../domain/entities/Cultivo";
import { CultivoEntity } from "../entities/cultivosEntity";

export class CultivoMapper {
  static toDomain(entity: CultivoEntity): Cultivo {
    return new Cultivo(
      entity.id,
      entity.nombre,
      entity.tipoCultivo,
      entity.zonaCultivo,
      entity.fechaSiembra
    );
  }

  static toEntity(domain: Cultivo): CultivoEntity {
    const entity = new CultivoEntity();
    entity.id = domain.id;
    entity.nombre = domain.nombre;
    entity.tipoCultivo = domain.tipoCultivo;
    entity.zonaCultivo = domain.zonaCultivo;
    entity.fechaSiembra = domain.fechaSiembra;
    return entity;
  }
}
