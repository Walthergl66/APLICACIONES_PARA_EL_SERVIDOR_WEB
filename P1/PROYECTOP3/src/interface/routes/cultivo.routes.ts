// src/interfaces/routes/cultivo.routes.ts

import { Router } from "express";
import { CultivoController } from "../controllers/CultivoController";
import { CultivoService } from "../../application/services/CultivoService";
import { CultivoRepository } from "../../infrastructure/orm/repositories/CultivoRepository";

const router = Router();

// Inyección manual de dependencias (puedes usar un contenedor después si quieres)
const repo = new CultivoRepository();
const service = new CultivoService(repo);
const controller = new CultivoController(service);

router.get("/", controller.obtenerTodos);
router.get("/:id", controller.obtenerPorId);
router.post("/", controller.crear);
router.put("/:id", controller.actualizar);
router.delete("/:id", controller.eliminar);

export default router;
