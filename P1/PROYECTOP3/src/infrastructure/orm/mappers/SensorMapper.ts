import { SensorEntity } from "../entities/SensorEntity";
import { Sensor } from "../../../domain/entities/Sensor";

export class SensorMapper {
  static toDomain(entity: SensorEntity): Sensor {
    return new Sensor(
      entity.id,
      entity.tipo,
      entity.modelo,
      entity.unidadMedida,
      entity.estado,
      entity.fechaUltimaLectura,
      entity.zonaCultivoId
    );
  }

  static toEntity(domain: Sensor): SensorEntity {
    const entity = new SensorEntity();
    entity.id = domain.id;
    entity.tipo = domain.tipo;
    entity.modelo = domain.modelo;
    entity.unidadMedida = domain.unidadMedida;
    entity.estado = domain.estado;
    entity.fechaUltimaLectura = domain.fechaUltimaLectura;
    entity.zonaCultivoId = domain.zonaCultivoId;
    return entity;
  }
}
