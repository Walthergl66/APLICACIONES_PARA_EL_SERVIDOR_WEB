import { Usuario } from "../entities/Usuario";

export interface IUsuarioRepository {
  findAll(): Promise<Usuario[]>;
  findById(id: number): Promise<Usuario | null>;
  findByEmail(email: string): Promise<Usuario | null>;
  save(usuario: Usuario): Promise<Usuario>;
  update(id: number, usuario: Usuario): Promise<Usuario>;
  delete(id: number): Promise<void>;
}
