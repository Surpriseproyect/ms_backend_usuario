import { Router } from "express";
import { crearUsuario, eliminarUsuario,
        listarUsuario, modificarUsuario,
        mostrarUsuario } from "../controllers/controllers.usuario";


const rutaUsuario = Router();

rutaUsuario.get("/usuario/:id", mostrarUsuario )
rutaUsuario.get("/usuario", listarUsuario)
rutaUsuario.post("/usuario", crearUsuario)
rutaUsuario.put("/usuario", modificarUsuario )
rutaUsuario.delete("/usuario", eliminarUsuario)


export default rutaUsuario;