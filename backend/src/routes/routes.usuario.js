
/**
 * Rutas
 * @module Rutas
 */
import { Router } from "express";
import { actualizarEstado, crearUsuario, eliminarUsuario,
        listarUsuario, logueoUsuario, modificarUsuario,
        mostrarUsuario, 
        validarToken} from "../controllers/controllers.usuario.js";
import { verifytoken } from "../middleware/token.js";


/**
 * Se utilizo las rutas para poder mostrar, listar, crear, modificar, actualizar, eliminar, loguearse
 * y validar el token
 */

const rutaUsuario = Router();

//mostrar
rutaUsuario.get("/:id", mostrarUsuario )
//listar
rutaUsuario.get("/usuario", listarUsuario)
//crear
rutaUsuario.post("/usuario", crearUsuario)
//modificar
rutaUsuario.put("/usuario/:id", modificarUsuario)
//modificar estado usuario
rutaUsuario.put("/estado/:id", actualizarEstado)
//eliminar
rutaUsuario.delete("/usuario/:id", eliminarUsuario)
//login
rutaUsuario.post("/loginusuario", logueoUsuario);
//Validar token
rutaUsuario.post("/oauth", verifytoken, validarToken);
//verificar rol

export default rutaUsuario;