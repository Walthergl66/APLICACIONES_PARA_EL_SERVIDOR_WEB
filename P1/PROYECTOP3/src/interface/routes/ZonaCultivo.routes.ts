import { Router } from "express";
import { ZonaCultivoRepository } from "../../infrastructure/orm/repositories/ZonaCultivoRepository";
import { ZonaCultivoService } from "../../application/services/ZonaCultivoService";
import { ZonaCultivoController } from "../controllers/ZonaCultivoController";

const router = Router();

const repo = new ZonaCultivoRepository();
const service = new ZonaCultivoService(repo);
const controller = new ZonaCultivoController(service);

router.get("/", controller.obtenerTodas);
router.get("/:id", controller.obtenerPorId);
router.post("/", controller.crear);
router.put("/:id", controller.actualizar);
router.delete("/:id", controller.eliminar);

export default router;
