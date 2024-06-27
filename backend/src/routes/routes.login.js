/**
 * rutas
 * @module rutas
 */
import { Router } from "express";
import {cajero, dashboard, inicio, productos, sobrenosotros } from "../controllers/controllers.login.js";

const rutaLogin = Router();


/**
 * Se utiliza la rutaLogin donde se va a mostrar el inicio del login
 */
rutaLogin.get("/", inicio)
rutaLogin.get("/sobrenosotros", sobrenosotros)
rutaLogin.get("/productos", productos)
rutaLogin.get("/dashboard", dashboard)
rutaLogin.get("/cajero", cajero)

export default rutaLogin;