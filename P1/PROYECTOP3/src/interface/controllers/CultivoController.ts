// src/interfaces/controllers/CultivoController.ts

import { Request, Response } from "express";
import { CultivoService } from "../../application/services/CultivoService";

export class CultivoController {
  constructor(private cultivoService: CultivoService) {}

  obtenerTodos = async (req: Request, res: Response) => {
    const cultivos = await this.cultivoService.obtenerTodos();
    res.json(cultivos);
  };

  obtenerPorId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const cultivo = await this.cultivoService.obtenerPorId(id);
    // if (!cultivo) return res.status(404).json({ mensaje: "Cultivo no encontrado" });
    res.json(cultivo);
  };

  crear = async (req: Request, res: Response) => {
    const { nombre, tipoCultivo, zonaCultivo, fechaSiembra } = req.body;
    const nuevo = await this.cultivoService.crearCultivo({
      nombre,
      tipoCultivo,
      zonaCultivo,
      fechaSiembra: new Date(fechaSiembra),
    });
    res.status(201).json(nuevo);
  };

  actualizar = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { nombre, tipoCultivo, zonaCultivo, fechaSiembra } = req.body;
    const actualizado = await this.cultivoService.actualizarCultivo(id, {
      nombre,
      tipoCultivo,
      zonaCultivo,
      fechaSiembra: new Date(fechaSiembra),
    });
    res.json(actualizado);
  };

  eliminar = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await this.cultivoService.eliminarCultivo(id);
    res.status(204).send();
  };
}
