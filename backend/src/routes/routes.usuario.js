import { Router } from "express";
import { crearUsuario, eliminarUsuario,
        listarUsuario, logueoUsuario, modificarUsuario,
        mostrarUsuario, 
        validarToken} from "../controllers/controllers.usuario.js";
import { verifytoken } from "../middleware/token.js";


const rutaUsuario = Router();

//mostrar
rutaUsuario.get("/:id", mostrarUsuario )
//listar
rutaUsuario.get("/usuario", listarUsuario)
//crear
rutaUsuario.post("/usuario", crearUsuario)
//modificar
rutaUsuario.put("/usuario/:id", modificarUsuario)
//eliminar
rutaUsuario.delete("/usuario", eliminarUsuario)
//login
rutaUsuario.post("/loginusuario", logueoUsuario);
//Validar token
rutaUsuario.post("/oauth", verifytoken, validarToken);
//verificar rol

export default rutaUsuario;