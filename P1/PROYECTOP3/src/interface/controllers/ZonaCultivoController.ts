import { Request, Response } from "express";
import { ZonaCultivoService } from "../../application/services/ZonaCultivoService";

export class ZonaCultivoController {
  constructor(private service: ZonaCultivoService) {}

  obtenerTodas = async (req: Request, res: Response) => {
    const zonas = await this.service.obtenerTodas();
    res.json(zonas);
  };

  obtenerPorId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const zona = await this.service.obtenerPorId(id);
    // if (!zona) return res.status(404).json({ mensaje: "Zona de cultivo no encontrada" });
    res.json(zona);
  };

  crear = async (req: Request, res: Response) => {
    const { nombre, ubicacion, tipoSuelo, cultivoActual } = req.body;
    const nueva = await this.service.crear({ nombre, ubicacion, tipoSuelo, cultivoActual });
    res.status(201).json(nueva);
  };

  actualizar = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { nombre, ubicacion, tipoSuelo, cultivoActual } = req.body;
    const actualizada = await this.service.actualizar(id, { nombre, ubicacion, tipoSuelo, cultivoActual });
    res.json(actualizada);
  };

  eliminar = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await this.service.eliminar(id);
    res.status(204).send();
  };
}
