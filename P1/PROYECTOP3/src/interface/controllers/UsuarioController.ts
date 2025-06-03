import { Request, Response } from "express";
import { UsuarioService } from "../../application/services/UsuarioService";

export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  obtenerTodos = async (req: Request, res: Response) => {
    const usuarios = await this.usuarioService.obtenerTodos();
    res.json(usuarios);
  };

  obtenerPorId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const usuario = await this.usuarioService.obtenerPorId(id);
    res.json(usuario);
  };

  crear = async (req: Request, res: Response) => {
    const { username, password, email, role } = req.body;
    const nuevo = await this.usuarioService.crearUsuario({ username, password, email, role });
    res.status(201).json(nuevo);
  };

  actualizar = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { username, password, email, role } = req.body;
    const actualizado = await this.usuarioService.actualizarUsuario(id, { username, password, email, role });
    res.json(actualizado);
  };

  eliminar = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await this.usuarioService.eliminarUsuario(id);
    res.status(204).send();
  };
}
 