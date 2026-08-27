// Controller de games
// O controller tratará as requisições do cliente
// Importando o service
import gameService from "../services/gameService.js";
// importando o object id do mongo db
import { ObjectId } from "mongodb";
// Função que irá tratar a requisição para LISTAR os jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    res.status(200).json({ games: games });
    // Cod. 200 - OK - Requisição feita com sucesso
  } catch (error) {
    console.log(error);
    // Tratando a resposta que api irá enviar em caso de erro
    res
      .status(500)
      .json({
        error: "Ocorreu um erro ao listar os jogos. Erro interno do servidor.",
      });
  }
};
//Função que trata a requisicao para listar um jogo Unico

const getOneGame = async (req, res)=> {
  try {
    const id = req.params.id
    if (ObjectId.isValid(id)){
      const game = await gameService.getOne(id) // pode ser qu eo id nao ser encontrado no banco entao tem q ser tratado
      if (!game) {
        res.status(404).json({error: 'Jogo não encontrado'}) // 404 - NOT FOUND
      }else {
        res.status(200).json({game});
      }
    }else{
       res.status(400).json({game})
    }   
  }catch(error){
    console.log(error);
    res.status(500).json({error : 'Erro interno do servidor'})
  }
}

//Funcao que ira tratar a requisicao para cadastrar os jogos
const createGame = async (req, res) => {
  try {
    //const title = req.body.title
    //coletando dados enviados (formularios, da requisicao, etc) e gravando nas variaveis
    const { title, year, price, descriptions } = req.body;
    //Enviando dados para o Service cadastrar
    await gameService.Create(title, year, price, descriptions);
    //Cod. 201 (created) -> Recurso criado com sucesso no servidor
    res.status(201).json({ message: "Jogo cadastrado com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }

  //
};

//Função que trata a requisição para EXCLUIR um jogo
const deleteGame = async(req, res) => {
    try{
        const id = req.params.id; // coletando o parametro id da rota
        // Fazendo a validacao do ObjectID
        if(ObjectId.isValid(id)){
            await gameService.Delete(id);
            res.sendStatus(204)// 204  No content nao tem conteudo entao em vez de usar o status é utilizado o  sendStatus
        } else {
            res.status(400).json({error: 'Requisicao mal formada, ID invalido'}) //cod 400 : BAD REQUEST
        }
    }catch (error){
        console.log(error);
        res.status(500).json({error: 'Erro interno do servidor'})
    }
}
//Funcao que trata a requisicao para alterar um jogo
const updateGame = async (req,res)=>{
    try{
        //Coletando a Id da Rota
        const id = req.params.id
        //validando o ObjectId
        if(ObjectId.isValid(id)){
            const {title, year,price,descriptions} = req.body
            //enviando os dados para o service
            await gameService.Update(id, title,year,price,descriptions);
            res.status(200).json({message: 'Jogo atualizado com sucesso'})
        }else {
            res.status(500).json({error: 'Erro interno do servidor'})
        }
    } catch(error){
        console.log(error)
        res.status(500).json({error : 'Erro interno do servidor'})
    }
}
// Exportando as funções
export default { getAllGames, createGame, deleteGame, updateGame, getOneGame };
