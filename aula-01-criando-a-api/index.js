// Importar o express
import express from "express";
//Carregando Express 
const app = express();

//Configurando oo Express
app.use(express.json());

//Rota Principal da API

app.get("/", (req,res)=>{
    //Json que sera retornado pela api
    const games =[
        {
            title: "Fifa 2019",
            year: 2019,
            platform: "X-box 360",
            preice: 198
        },
        {
            title: "The Sims",
            year: 2016,
            platform: "PC (Windows)",
            preice: 1149
        },
        {
            title: "CS GO",
            year: 2012,
            platform: "PC (Windows)",
            preice: 89
        }        
    ]
    //Configurando o retorno da API
    res.status(200).json(games)
    // quando nao tem um json e so quer mandar o status :
    // res.sendStatus(404)
})

//Iniciando o servidor api

const port = 4000; 

app.listen(port, (error)=>{
    if(error){
    console.log("Ocorreu um erro ao iniciar a API "+ error)
    }else {
        console.log("API iniciada com sucesso")
    }
})