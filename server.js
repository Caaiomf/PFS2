import express from "express"
import tarefaRouter from "./routes/tarefaRouter.js"
const server = express();

server.use(express.json());

server.use("/tarefa", tarefaRouter);

server.listen(5000, function(){
    console.log("servidor web funcionando!");
})