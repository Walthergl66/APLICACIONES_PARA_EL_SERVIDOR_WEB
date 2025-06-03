import { ISensorRepository } from "../../domain/repositories/ISensorRepository";
import { Sensor } from "../../domain/entities/Sensor";

export class SensorService {
  constructor(private repo: ISensorRepository) {}

  obtenerTodos(): Promise<Sensor[]> {
    return this.repo.findAll();
  }

  obtenerPorId(id: number): Promise<Sensor | null> {
    return this.repo.findById(id);
  }

  crear(data: Omit<Sensor, "id">): Promise<Sensor> {
    const nuevo = new Sensor(
      0,
      data.tipo,
      data.modelo,
      data.unidadMedida,
      data.estado,
      data.fechaUltimaLectura,
      data.zonaCultivoId
    );
    return this.repo.save(nuevo);
  }

  actualizar(id: number, data: Omit<Sensor, "id">): Promise<Sensor> {
    const actualizado = new Sensor(
      id,
      data.tipo,
      data.modelo,
      data.unidadMedida,
      data.estado,
      data.fechaUltimaLectura,
      data.zonaCultivoId
    );
    return this.repo.update(id, actualizado);
  }

  eliminar(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
