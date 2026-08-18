// Serviços de Games
// Aqui será inserido os métodos para Ler, cadastrar, Alterar e Excluir games

// Importando o Model
import Game from "../models/Games.js";

class gameService {
  // Serviço para ler os jogos
  async getAll() {
    // Tentativa da promessa (sucesso)
    try {
      //  o método .find() do mongoose busca registros
      const games = await Game.find();
      return games;
      // Caso ocorra um erro será executado o catch
    } catch (error) {
      console.log(error);
    }
  }
  //Metodo para cadastrar jogos
  async Create(title, year, platform, price) {
    try {
      // Enviando is dados a serem cadastrados para o Model
      const newGame = new Game({
        //title : title,
        title,
        year,
        platform,
        price,
      });
      //Aguardadr a operação de cadastro
      await newGame.save(); // .save() é o metodo do mongoose para cadastrar
    } catch (error) {
      console.log(error);
    }
  }
}
// Exportando a classe
export default new gameService();
