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
  //Metodo para listar um registro unico
  async getOne(id) {
    try{ // metodo do mongoose para selecionar um registro unico
      const game = await Game.findOne({_id : id}) // no mongoDB o id fica com o underline _id)
      return game
    }catch(error){
      console.log(error)
    }
  } 
  //Metodo para cadastrar jogos
  async Create(title, year, price, descriptions) {
    try {
      
      // Enviando is dados a serem cadastrados para o Model
      const newGame = new Game({
        //title : title,
        title,
        year,
        price,
        descriptions
      });
      //Aguardadr a operação de cadastro
      await newGame.save(); // .save() é o metodo do mongoose para cadastrar
    } catch (error) {
      console.log(error);
    }
  }
  //metodo para excluir um jogo
  async Delete(id) {
    try{
      await Game.findByIdAndDelete(id)
      //O metodo findByIdAnd =Delete() do mongoose busca um registro pela ID e deleta
      console.log(`O Jogo com a id ${id} foi deletado.`)
    }catch{
      console.log(error)
    }
  }
  //metodo para alterar o jogo
  async Update(id, title, year, price, descriptions){
    try{
      await Game.findByIdAndUpdate(id, {
        title,
        year,
        price,
        descriptions
      })
      console.log(`O jogo com a id ${id} foi alterado`)
    }catch(error){
      console.log(error)
    }
  }
//encerra a classe
}
// Exportando a classe
export default new gameService();
