let tarefas = [
    {
        id: 1,
        nome: "Levar o bidu para passear"
    },
    {
        id: 2,
        nome: "estudar para PFS2"
    },
    {
        id: 3,
        nome: "senta la claudia"
    }
]


export default class tarefaController{

    listar(req, res){
        return res.status(200).json(tarefas);
    }

    cadastrar(req, res){
        //let nome = req.body.nome;
        //let descricao = req.body.descricao;
        //let data = req.body.data;
        let{nome} = req.body;
        
        if(nome){
            //grava no array o novo objeto
            let novaTarefa = {id: Date.now(), nome: nome};
            tarefas.push(novaTarefa);
            res.status(201).json(novaTarefa);
        }   
        else{
            res.status(400).json({msg: " o parametro nome não foi enviado na requisição"})
        }
    }
    
    alterar(req, res){
    
    }
    
    deletar(req, res){
        
    }
    
}