import { IRiegoRepository } from "../../domain/repositories/IRiegoRepository";
import { Riego } from "../../domain/entities/Riego";

export class RiegoService {
  constructor(private repo: IRiegoRepository) {}

  obtenerTodos(): Promise<Riego[]> {
    return this.repo.findAll();
  }

  obtenerPorId(id: number): Promise<Riego | null> {
    return this.repo.findById(id);
  }

  crear(data: Omit<Riego, "id">): Promise<Riego> {
    const nuevo = new Riego(
      0,
      data.cantidadAgua,
      data.fecha,
      data.duracionMinutos,
      data.volumenLitros,
      data.activadoAutomaticamente,
      data.zonaCultivoId
    );
    return this.repo.save(nuevo);
  }

  actualizar(id: number, data: Omit<Riego, "id">): Promise<Riego> {
    const actualizado = new Riego(
      id,
      data.cantidadAgua,
      data.fecha,
      data.duracionMinutos,
      data.volumenLitros,
      data.activadoAutomaticamente,
      data.zonaCultivoId
    );
    return this.repo.update(id, actualizado);
  }

  eliminar(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
