// Controller de games
// O controller tratará as requisições do cliente
// Importando o service
import gameService from '../services/gameService.js';

// Função que irá tratar a requisição para LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({ games: games })
        // Cod. 200 - OK - Requisição feita com sucesso
    } catch (error) {
        console.log(error)
        // Tratando a resposta que api irá enviar em caso de erro
        res.status(500).json({ error: 'Ocorreu um erro ao listar os jogos. Erro interno do servidor.' })
    }
}

//Funcao que ira tratar a requisicao para cadastrar os jogos
const createGame = async (req, res) => {
    try{
        //const title = req.body.title
        //coletando dados enviados (formularios, da requisicao, etc) e gravando nas variaveis
        const {title,year,platform, price} = req.body
        //Enviando dados para o Service cadastrar
        await gameService.Create(title, year, platform, price)
        //Cod. 201 (created) -> Recurso criado com sucesso no servidor
        res.status(201).json({message : "Jogo cadastrado com sucesso"})
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Erro interno do servidor"});
    }
}
// Exportando as funções
export default { getAllGames, createGame }