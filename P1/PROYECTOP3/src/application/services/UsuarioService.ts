import { IUsuarioRepository } from "../../domain/repositories/IUsuarioRepository";
import { Usuario } from "../../domain/entities/Usuario";

export class UsuarioService {
  constructor(private usuarioRepo: IUsuarioRepository) {}

  obtenerTodos(): Promise<Usuario[]> {
    return this.usuarioRepo.findAll();
  }

  obtenerPorId(id: number): Promise<Usuario | null> {
    return this.usuarioRepo.findById(id);
  }

  crearUsuario(data: Omit<Usuario, "id">): Promise<Usuario> {
    const nuevo = new Usuario(0, data.username, data.password, data.email, data.role);
    return this.usuarioRepo.save(nuevo);
  }

  actualizarUsuario(id: number, data: Omit<Usuario, "id">): Promise<Usuario> {
    const actualizado = new Usuario(id, data.username, data.password, data.email, data.role);
    return this.usuarioRepo.update(id, actualizado);
  }

  eliminarUsuario(id: number): Promise<void> {
    return this.usuarioRepo.delete(id);
  }
}
