import { Router } from "express";
import {inicio, productos, sobrenosotros } from "../controllers/controllers.login";

const rutaLogin = Router();

rutaLogin.get("/", inicio)
rutaLogin.get("/sobrenosotros", sobrenosotros)
rutaLogin.get("/productos", productos)



export default rutaLogin;
