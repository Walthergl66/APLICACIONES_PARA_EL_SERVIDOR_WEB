import { UsuarioHttpClient } from '../domain/client/usuario.cliente';
import { UsuarioEntity } from '../domain/entities/usuario.entity';

export class UsuarioService {

  private http = new UsuarioHttpClient();

  async getAll(): Promise<UsuarioEntity[]> {
    return this.http.getUsuarios();
  }

  async create(data: {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
  }): Promise<UsuarioEntity> {
    return this.http.crearUsuario(data);
  }

}
