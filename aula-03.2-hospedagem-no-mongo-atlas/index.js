// Importar o Express
import express from "express";
// Importar o Mongoose
import mongoose from "mongoose"
// Carregando as variáveis de ambiente do arquivo .env
import "dotenv/config";
// Importar o Model
import Game from "./models/Games.js"
// Importar as rotas (endpoints)
import gameRoutes from './routes/gameRoutes.js'

// Carregando Express
const app = express();
// Configurações do Express
app.use(express.urlencoded({extended: false}))
app.use(express.json());
// Carregando as rotas de games
app.use('/', gameRoutes)


// Iniciando a conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Atlas conectado com sucesso!");
    })
    .catch((error) => {
        console.log("Erro ao conectar ao MongoDB Atlas:");
        console.log(error);
    });

// Iniciando o servidor da API
const port = 4000;
app.listen(port, (error) => {
    if (error) {
        console.log("Ocorreu um erro ao iniciar a API!" + error);
    } else {
        console.log("API iniciada com sucesso na porta " + port);
    }
});