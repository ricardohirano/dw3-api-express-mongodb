//userService.js

// Importando o model
import User from "../models/Users.js"

class userService{
    // Método para cadastrar um usuario
    async Create(email, password){
        try{
        const newUser = new User ({
            email,
            password
        })
        await newUser.save();
    } catch (error){
        console.log(error);
        }
    }
    // metodo para listar um usuario
    async getOne(email){
        try{
            const user = await User.findOne({ email :email})
            return user;
        }catch (error){
            console.log(error)
        }
    }
}

export default new userService()