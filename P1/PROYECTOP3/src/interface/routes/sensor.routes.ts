import { Router } from "express";
import { SensorRepository } from "../../infrastructure/orm/repositories/SensorRepository";
import { SensorService } from "../../application/services/SensorService";
import { SensorController } from "../controllers/SensorController";

const router = Router();

const repo = new SensorRepository();
const service = new SensorService(repo);
const controller = new SensorController(service);

router.get("/", controller.obtenerTodos);
router.get("/:id", controller.obtenerPorId);
router.post("/", controller.crear);
router.put("/:id", controller.actualizar);
router.delete("/:id", controller.eliminar);

export default router;
