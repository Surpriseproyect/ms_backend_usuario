import { Router } from "express";
import {dashboard, inicio, productos, sobrenosotros } from "../controllers/controllers.login";

const rutaLogin = Router();

rutaLogin.get("/", inicio)
rutaLogin.get("/sobrenosotros", sobrenosotros)
rutaLogin.get("/productos", productos)
rutaLogin.get("/dashboard", dashboard)



export default rutaLogin;
