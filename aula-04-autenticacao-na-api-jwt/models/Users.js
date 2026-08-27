import mongoose from "mongoose";

//criando schemma de usuario
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// Iniciando o Model
const User = mongoose.model("User", userSchema); //User no mongo fica como nome users
export default User;