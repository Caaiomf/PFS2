import express from "express";
import tarefaController from "../controllers/tarefaController.js";

const router = express.Router();

let controller = new tarefaController();

router.get("/", controller.listar);
router.post("/", controller.cadastrar);
router.put("/", controller.alterar);
router.get("/:id", controller.obterPorId);
router.delete("/:id", controller.deletar);

export default router;