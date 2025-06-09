// src/clients/usuario.client.ts
import axios from 'axios';
import { UsuarioEntity } from '../entities/usuario.entity';

const BASE_URL = 'http://localhost:3000/api/usuarios';

export class UsuarioHttpClient {

  async getUsuarios(): Promise<UsuarioEntity[]> {
  try {
    const response = await axios.get<UsuarioEntity[]>(BASE_URL);
    return response.data.map(u => UsuarioEntity.fromObject(u));
  } catch (error: any) {
    console.error('Error en getUsuarios:', error.response?.data || error.message);
    throw error;
  }
}

  async crearUsuario(data: {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
  }): Promise<UsuarioEntity> {
    const response = await axios.post<UsuarioEntity>(BASE_URL, data);
    return UsuarioEntity.fromObject(response.data);
  }
  

}
