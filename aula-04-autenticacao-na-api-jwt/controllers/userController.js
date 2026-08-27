
//Importando o Server
import userService from "../services/userService.js"

//Funcao para cadastrar um usuario
const createUser = async (req, res)=>{
    try{
        const {email, password} = req.body;
        await userService.Create(email,password);
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
        //Buscando o usuario pelo email
        const user = await userService.getOne(email)
        res.status(200).json({ message: 'Usuario logado com sucesso'})
    }catch (error){
    console.log(error)
    res.status(500).json({ error: 'Erro interno do servidor'})
    }
}
export default {createUser, loginUser}