import { Request, Response } from "express";
import { RiegoService } from "../../application/services/RiegoService";

export class RiegoController {
  constructor(private service: RiegoService) {}

  obtenerTodos = async (req: Request, res: Response) => {
    const riegos = await this.service.obtenerTodos();
    res.json(riegos);
  };

  obtenerPorId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const riego = await this.service.obtenerPorId(id);
    // if (!riego) return res.status(404).json({ mensaje: "Riego no encontrado" });
    res.json(riego);
  };

  crear = async (req: Request, res: Response) => {
    const riego = await this.service.crear(req.body);
    res.status(201).json(riego);
  };

  actualizar = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const riego = await this.service.actualizar(id, req.body);
    res.json(riego);
  };

  eliminar = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await this.service.eliminar(id);
    res.status(204).send();
  };
}
