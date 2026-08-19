let tarefas = [
    {
        id: 1,
        nome: "Levar o bidu para passear"
    },
    {
        id: 2,
        nome: "estudar para PFS2"
    }
]


export default class tarefaController{

    obterPorId(req, res){
    try{
        let {id} = req.params;

        let tarefaEncontrada = tarefas.filter(x => x.id == id);
        if(tarefaEncontrada.length == 0){
            return res.status(404).json({msg:"nenhuma tarefa encontrada para o ID fornecido"});
        }
        return res.status(200).json(tarefaEncontrada[0]);
    }
    catch(erro){
        console.log(erro);
        return res.status(400).json({msg: "Erro interno no servidor"})
    }
    }

    listar(req, res){
        try{
        return res.status(200).json(tarefas);
        }catch(erro){
            console.log(erro);
            return res.status(400).json({msg: "Erro interno no servidor"})
        }
    }

    cadastrar(req, res) {
    try{
        let {nome} = req.body;
        if(nome) {
            //grava no array o novo objeto;
            let novaTarefa = {id: Date.now(), nome: nome};
            tarefas.push(novaTarefa);
            return res.status(201).json(novaTarefa);
        }
        else { 
            return res.status(400).json({msg: "O parâmetro nome não foi enviado na requisição!"})
        }
        }
        catch(erro){
            console.log(erro);
            return res.status(500).json({msg: "Erro interno no servidor"})
        }
    }
    
    alterar(req, res) {
    try{
            let {id, nome} = req.body;
            //validação do corpo
            if(id >= 0 && nome) {
                //validação da tarefa a ser alterada
                //busca no array para achar a tarefa.
                let tarefaEncontrada = tarefas.filter(x => x.id == id);
                if(tarefaEncontrada.length == 0) {
                    return res.status(404).json({msg: "Tarefa não encontrada para alteração!"});
                }
                
                //substitui os atributos pelos que vieram no corpo
                tarefaEncontrada[0].nome = nome;

                return res.status(200).json({msg:  "Tarefa alterada!"});
            }
            else {
                return res.status(400).json({msg: "Parâmetros incorretos! Verifique se o ID e nome foram enviados no corpo"})
            }
        }catch(erro){
            console.log(erro);
            return res.status(400).json({msg: "Erro interno no servidor"})
        }
    }
    
    deletar(req, res){
        try{
            let{id} = req.params;
            if(id) {
                //busca para validar a existencia
                let tarefaEncontrada = tarefaController.filter(x => x.id == id);
                if(tarefaEncontrada.length == 0){
                    return res.status(404).json({msg: "tarefa não encontrada para deleção!"});
                }
                //se existe faz a deleção
                tarefas= tarefas.filter(x=> x.id != id);
                res.status(200).json({msg: "Tarefa Excluida !"})
            } else{
                return res.status(400).json({msg: "ID nao enviado para deleção!"})
            }
        }catch(erro)
        {
            console.log(erro);
            return res.status(400).json({msg: "Erro interno no servidor"})  
        }
    }
}