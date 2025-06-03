import { Request, Response } from "express";
import { SensorService } from "../../application/services/SensorService";

export class SensorController {
  constructor(private service: SensorService) {}

  obtenerTodos = async (req: Request, res: Response) => {
    const sensores = await this.service.obtenerTodos();
    res.json(sensores);
  };

  obtenerPorId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const sensor = await this.service.obtenerPorId(id);
    // if (!sensor) return res.status(404).json({ mensaje: "Sensor no encontrado" });
    res.json(sensor);
  };

  crear = async (req: Request, res: Response) => {
    const sensor = await this.service.crear(req.body);
    res.status(201).json(sensor);
  };

  actualizar = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const sensor = await this.service.actualizar(id, req.body);
    res.json(sensor);
  };

  eliminar = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await this.service.eliminar(id);
    res.status(204).send();
  };
}
