## metodo de importar o express e tambem exportar os arquivos são diferentes do q o PFS1 ter atenção!
## vale resaltar: import tarefaController from "../controllers/tarefaController.js"; precisa colocar o .js no final, precisa chamar
o nome do arquivo por completo diferente do q é no PFS1
    
# completo
//let nome = req.body.nome;
//let descricao = req.body.descricao;
//let data = req.body.data;
# mesma coisa mas resumido
let{nome, descricao, data} = req.body;

let novaTarefa = {id: Date.now(), nome: nome};
usa o tempo de hoje para criar o id, date.now cria um numero aleatorio apartir dos segundos

## para testar o metodo post é possivel usando um app "postman"

# necessario na pasta server.js "server.use(express.json());" para descerealizar o json q vem de fora para poder tratar dentro dos arquivos