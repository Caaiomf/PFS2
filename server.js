import express from "express"
import tarefaRouter from "./routes/tarefaRouter.js"
//importa o swagger-ui
import swaggerUI from "swagger-ui-express";
//Gambiarra para usarmos o require e importar o output
import{createRequire} from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swagger-output.json");

const server = express();

server.use(express.json());


//definição da rota que ira expor a pagina de documentação
server.use("/docs", swaggerUI.serve, swaggerUI.setup(outputJson));

server.use("/tarefa", tarefaRouter);

server.listen(5000, function(){
    console.log("servidor web funcionando!");
})