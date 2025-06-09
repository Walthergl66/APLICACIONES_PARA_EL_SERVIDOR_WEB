import { Request, Response } from 'express';
import { UsuarioService } from '../../services/usuario.service';

const service = new UsuarioService();

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await service.getAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const createUsuario = async (req: Request, res: Response) => {
  try {
    const { nombre, apellido, email, password } = req.body;
    const nuevo = await service.create({ nombre, apellido, email, password });
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario' });
  }
};
