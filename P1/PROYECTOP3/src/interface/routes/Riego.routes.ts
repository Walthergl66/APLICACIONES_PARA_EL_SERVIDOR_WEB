import { Router } from "express";
import { RiegoRepository } from "../../infrastructure/orm/repositories/RiegoRepository";
import { RiegoService } from "../../application/services/RiegoService";
import { RiegoController } from "../controllers/RiegoController";

const router = Router();

const repo = new RiegoRepository();
const service = new RiegoService(repo);
const controller = new RiegoController(service);

router.get("/", controller.obtenerTodos);
router.get("/:id", controller.obtenerPorId);
router.post("/", controller.crear);
router.put("/:id", controller.actualizar);
router.delete("/:id", controller.eliminar);

export default router;
