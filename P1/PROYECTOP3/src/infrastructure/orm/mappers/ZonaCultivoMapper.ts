import { ZonaCultivo } from "../../../domain/entities/ZonaCultivo";
import { ZonaCultivoEntity } from "../entities/ZonaCultivoEntity";

export class ZonaCultivoMapper {
  static toDomain(entity: ZonaCultivoEntity): ZonaCultivo {
    return new ZonaCultivo(
      entity.id,
      entity.nombre,
      entity.ubicacion,
      entity.tipoSuelo,
      entity.cultivoActual
    );
  }

  static toEntity(domain: ZonaCultivo): ZonaCultivoEntity {
    const entity = new ZonaCultivoEntity();
    entity.id = domain.id;
    entity.nombre = domain.nombre;
    entity.ubicacion = domain.ubicacion;
    entity.tipoSuelo = domain.tipoSuelo;
    entity.cultivoActual = domain.cultivoActual;
    return entity;
  }
}
