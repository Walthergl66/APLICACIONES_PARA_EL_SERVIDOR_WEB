import { IZonaCultivoRepository } from "../../domain/repositories/IZonaCultivoRepository";
import { ZonaCultivo } from "../../domain/entities/ZonaCultivo";

export class ZonaCultivoService {
  constructor(private zonaRepo: IZonaCultivoRepository) {}

  obtenerTodas(): Promise<ZonaCultivo[]> {
    return this.zonaRepo.findAll();
  }

  obtenerPorId(id: number): Promise<ZonaCultivo | null> {
    return this.zonaRepo.findById(id);
  }

  crear(data: Omit<ZonaCultivo, "id">): Promise<ZonaCultivo> {
    const nueva = new ZonaCultivo(0, data.nombre, data.ubicacion, data.tipoSuelo, data.cultivoActual);
    return this.zonaRepo.save(nueva);
  }

  actualizar(id: number, data: Omit<ZonaCultivo, "id">): Promise<ZonaCultivo> {
    const actualizada = new ZonaCultivo(id, data.nombre, data.ubicacion, data.tipoSuelo, data.cultivoActual);
    return this.zonaRepo.update(id, actualizada);
  }

  eliminar(id: number): Promise<void> {
    return this.zonaRepo.delete(id);
  }
}
