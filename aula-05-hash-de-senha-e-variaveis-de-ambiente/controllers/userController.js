// configurando as variaveis de ambiente (dotenv)
import dotenv from "dotenv";
dotenv.config();
//Importando o Server
import userService from "../services/userService.js"
//importando o json web token
import jwt from 'jsonwebtoken'
//importando o brcrypt
import bcrypt from "bcrypt";
//Criando um segredo para o TOKEN
const JWTSecret = process.env.JWTSECRET
//Funcao para cadastrar um usuario
const createUser = async (req, res)=>{
    try{
        const {email, password} = req.body;
        // gerando o hash de senha
        const salt = bcrypt.genSaltSync(10); // o salt encren=menta o hash ( aumenta o poder e o tempo para ser aceito)
        const hash = bcrypt.hashSync(password, salt)
        // cadastrando o usuario com o email e hash de senha
        await userService.Create(email, hash);
        res.status(201).json({ message: "usuario cadastrado com sucesso!"}
            //cod. 201: Created
        )
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Error interno do servdor'});
    }
}
//funncao para logar um usuario
const loginUser = async (req,res)=>{
    try{
        const {email, password }= req.body;
        // validar o email enviado
        if (email != undefined){
            //Buscando o usuario pelo email
            const user = await userService.getOne(email)
            //Verificando se o usuario existe
            if(user != undefined){
              //verificando se a senha esta correta
                // comparando o hash de senha
                const correct = bcrypt.compareSync(password, user.password)
                //verificando a senha estiver correta, gera o TOKEN
                if (correct){
                // se a sennha for correta, gera o Token (jwt.sign())
                jwt.sign({id : user._id, email : user.email}, 
                        JWTSecret, {expiresIn: '48h'}, (error,token)=> {
                                                                        //Tratando o erro durante a geração do token
                                                                        if(error){
                                                                            res.status(400).json({
                                                                                error: "Nao foi possivel gerar o token de autentificação"
                                                                            })
                                                                            //caso sucesso
                                                                        }else {
                                                                            res.status(200).json({token})
                                                                        }
                                                                        }
                        )
                //Caso senha Incorreta
                }else{
                    res.status(401).json({ //Cod 401 - usuario nao autorizado
                        error : "Credenciais inc=validas. Tente novamente!"
                    })
                }
            //caoso usuario nao encontradio      
            } else{
                res.status(404).json({error: "O usuario informado nao existe"}) //404 (Not Found)
            }
        //Caso email nao preenchido
        }else{
            res.status(400).json({error: "O email enviado é invalido"})
        }
    }catch (error){
    console.log(error)
    res.status(500).json({ error: 'Erro interno do servidor'})
    }
}
export default {createUser, loginUser, JWTSecret}