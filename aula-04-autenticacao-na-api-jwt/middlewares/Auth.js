import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

//Função que ira verificar se o usuaeio possui um token valido
// next ele e faz a acao depois do req e res da autentificação
const Authorization = (req, res, next) => {
    // caputurando o token do cabeçalo (header) da requisicao
    const authToken = req.headers['authorization']
    //se o token nao for vazio 
    if (authToken != undefined) {
        // split corta  o token 
        const bearer = authToken.split(" ");
        // capturando somente o token 
        const token = bearer[1];
        // validando o token com o JWT
        jwt.verify(token, userController.JWTSecret, (error, data) =>{
        // se o token for invalido
        if (error){
            res.status(401).json({error : "Token invalido"});
            //cod. 401 (UNAUTHORIZED)
        // Se o token for valido
        }else {
            req.token = token;
            req.loggedUser ={
                id: data.id,
                email : data.email,
            }
            //Permite prosseguir com a requisição
            next();
        }
        })
    } else {
        res.status(401).json({ error : "Token nao informado"})
    }
}
export default {Authorization};