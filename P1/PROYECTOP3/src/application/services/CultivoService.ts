
import { ICultivoRepository } from "../../domain/repositories/ICultivoRepository";
import { Cultivo } from "../../domain/entities/Cultivo";

export class CultivoService {
  constructor(private cultivoRepo: ICultivoRepository) {}

  async obtenerTodos(): Promise<Cultivo[]> {
    return await this.cultivoRepo.findAll();
  }

  async obtenerPorId(id: number): Promise<Cultivo | null> {
    return await this.cultivoRepo.findById(id);
  }

  async crearCultivo(data: Omit<Cultivo, "id">): Promise<Cultivo> {
    const cultivo = new Cultivo(0, data.nombre, data.tipoCultivo, data.zonaCultivo, data.fechaSiembra);
    return await this.cultivoRepo.save(cultivo);
  }

  async actualizarCultivo(id: number, data: Omit<Cultivo, "id">): Promise<Cultivo> {
    const cultivo = new Cultivo(id, data.nombre, data.tipoCultivo, data.zonaCultivo, data.fechaSiembra);
    return await this.cultivoRepo.update(id, cultivo);
  }

  async eliminarCultivo(id: number): Promise<void> {
    await this.cultivoRepo.delete(id);
  }
}
