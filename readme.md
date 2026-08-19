## metodo de importar o express e tambem exportar os arquivos são diferentes do q o PFS1 ter atenção!
## vale resaltar: import tarefaController from "../controllers/tarefaController.js"; precisa colocar o .js no final, precisa chamar
o nome do arquivo por completo diferente do q é no PFS1
    
# completo
let nome = req.body.nome;  
let descricao = req.body.descricao;  
let data = req.body.data;  
# mesma coisa mas resumido
let{nome, descricao, data} = req.body;  

let novaTarefa = {id: Date.now(), nome: nome};  
usa o tempo de hoje para criar o id, date.now cria um numero aleatorio apartir dos segundos  

## para testar o metodo post é possivel usando um app "postman"

## necessario na pasta server.js "server.use(express.json());" para descerealizar o json q vem de fora para poder tratar dentro dos arquivos
  
uma boa pratica de desenvolvimento para verificar um erro é usar o:  
Try{  
}catch(error){  
    console.log(erro);  
return res.status(400).json({msg: "Erro interno no servidor"})    
}  
vai definir q o codigo 400 é um erro e só mostra para o cliente uma mensagem de erro no servidor e nos podemos ter acesso pelo terminal   
  
## swagger é uma ferramenta de documentação de endpoints
ele mostra tudo o que é necessario no corpo, e tambem é possivel testar os endpoints e mostra tambem os possiveis codigo de retorno e o que ele faz  
existem alguns detalhes que não são automatico, como a descrição do endpoint sera necessario alguns marcadores para dizer qual a descrição dele  
  
## Swagger Autogen (npm install swagger-autogen) 
responsavel para ler todo o arquivo e cria um json
## Swagger UI Express (npm install swagger-ui-express)
le o json e cria a interface  

OBS: muitas bibliotecas ja vem com isso pronto, o express não é um deles então é necessario instalar 
