import { Router } from "express";
import { render } from "ejs";
import {cajero, dashboard, inicio, productos, sobrenosotros } from "../controllers/controllers.login.js";

const rutaLogin = Router();


rutaLogin.get("/", inicio)
rutaLogin.get("/sobrenosotros", sobrenosotros)
rutaLogin.get("/productos", productos)
rutaLogin.get("/dashboard", dashboard)
rutaLogin.get("/cajero", cajero)

export default rutaLogin;