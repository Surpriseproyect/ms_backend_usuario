import { Router } from "express";
import { crearUsuario, eliminarUsuario,
        listarUsuario, logueoUsuario, modificarUsuario,
        mostrarUsuario } from "../controllers/controllers.usuario";
import { verifytoken } from "../middleware/token";


const rutaUsuario = Router();

rutaUsuario.get("/usuario/:id", mostrarUsuario )
rutaUsuario.get("/usuario", listarUsuario)
rutaUsuario.post("/usuario", crearUsuario)
rutaUsuario.put("/usuario", verifytoken, modificarUsuario )
rutaUsuario.delete("/usuario", verifytoken, eliminarUsuario)
rutaUsuario.post("/loginusuario", logueoUsuario)

export default rutaUsuario;