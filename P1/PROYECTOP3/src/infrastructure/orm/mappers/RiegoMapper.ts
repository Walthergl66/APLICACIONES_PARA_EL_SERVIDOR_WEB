import { RiegoEntity } from "../entities/RiegoEntity";
import { Riego } from "../../../domain/entities/Riego";

export class RiegoMapper {
  static toDomain(entity: RiegoEntity): Riego {
    return new Riego(
      entity.id,
      entity.cantidadAgua,
      entity.fecha,
      entity.duracionMinutos,
      entity.volumenLitros,
      entity.activadoAutomaticamente,
      entity.zonaCultivoId
    );
  }

  static toEntity(domain: Riego): RiegoEntity {
    const entity = new RiegoEntity();
    entity.id = domain.id;
    entity.cantidadAgua = domain.cantidadAgua;
    entity.fecha = domain.fecha;
    entity.duracionMinutos = domain.duracionMinutos;
    entity.volumenLitros = domain.volumenLitros;
    entity.activadoAutomaticamente = domain.activadoAutomaticamente;
    entity.zonaCultivoId = domain.zonaCultivoId;
    return entity;
  }
}
