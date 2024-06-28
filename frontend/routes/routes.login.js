import { Router } from "express";
import { login, productos } from "../controllers/controllers.login.js";

const rutaLogin = Router();

rutaLogin.get("/", login)
rutaLogin.get("/productos", productos)

export default rutaLogin;