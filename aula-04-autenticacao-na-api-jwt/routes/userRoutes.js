// userRoutes.js
import express from 'express';
const userRoutes = express.Router();
//Importando o controller
import userController from '../controllers/userController.js'

//endpint para cadastrar  um usuario
userRoutes.post("/user", userController.createUser);
//endpint para logar  um usuario
userRoutes.post("/login", userController.loginUser);

export default userRoutes;
