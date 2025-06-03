import { Router } from "express";
import { UsuarioRepository } from "../../infrastructure/orm/repositories/UsuarioRepository";
import { UsuarioService } from "../../application/services/UsuarioService";
import { UsuarioController } from "../controllers/UsuarioController";

const router = Router();

const repo = new UsuarioRepository();
const service = new UsuarioService(repo);
const controller = new UsuarioController(service);

router.get("/", controller.obtenerTodos);
router.get("/:id", controller.obtenerPorId);
router.post("/", controller.crear);
router.put("/:id", controller.actualizar);
router.delete("/:id", controller.eliminar);

export default router;
