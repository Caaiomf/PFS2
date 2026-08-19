import express from "express";
import tarefaController from "../controllers/tarefaController.js";

const router = express.Router();

let controller = new tarefaController();

router.get("/", (req,res) => {
    // #swagger.tags = ["Tarefa"]
    // #swagger.summary = "Lista todas as tarefas cadastradas"
    controller.listar(req,res);
});
router.post("/", (req,res) => {
    // #swagger.tags = ["Tarefa"]
    // #swagger.summary = "Cadastrar tarefas"
        controller.cadastrar(req,res);
    });
router.put("/", (req,res) => {
    // #swagger.tags = ["Tarefa"]
    // #swagger.summary = "Alterar tarefas"
    controller.alterar(req,res);
});
router.get("/:id", (req,res) => {
    // #swagger.tags = ["Tarefa"]
    // #swagger.summary = "Obter por id"
    controller.obterPorId(req,res);});
router.delete("/:id", (req,res) => {
    // #swagger.tags = ["Tarefa"]
    // #swagger.summary = "Deletar tarefa"
    controller.deletar(req,res);
});

export default router;