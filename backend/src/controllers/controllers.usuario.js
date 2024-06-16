import bcrypt from "bcrypt";
import { pool } from "../config/mysql.db.js";
import { Acceso, Error } from "../message/mensaje.js";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { log } from "console";
config();

export const mostrarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const [respuesta] = await pool.query(`CALL SP_MOSTRAR_USUARIO(?)`, [id]);
        if (respuesta && respuesta.length > 0) {
            res.json(respuesta[0]);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const fiados = async (req, res) =>{
    try {
        const respuesta = await pool.query('SELECT * FROM usuarios WHERE estado = "fiado" or estado = "pendiente";')
        return respuesta[0];
    } catch (error) {
        console.error(error);
        return { "error": error };
    }
}
export const listarUsuario = async (req, res) => {
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_USUARIO()`);
        // res.json(respuesta[0])
        return respuesta;
    } catch (error) {
        console.error(error);
        return { "error": error };
    }
};
export const crearUsuario = async (req, res)=>{
    const {identificacion, nombres, telefono, correo,rol, estado} = req.body;
    const contrasenasincifrar = req.body.contrasena;
    try {
        const hash = await bcrypt.hash(contrasenasincifrar, 2)
        const contrasena = hash;
        const respuesta = await pool.query (`CALL SP_CREAR_USUARIO (?,?,?,?,?,?,?)`, [identificacion, nombres, telefono, correo, contrasena, rol, estado]);
            res.json({"respuesta": "el usuario ha sido creado"})
    } catch (error) {
        // res.json({"error": "el usuario no ha sido creado"})
        console.log(error);
    }
}
export const modificarUsuario = async (req,res)=>{
    const {id} = req.params
    const {identificacion, nombres, telefono, correo, contrasena, rol, estado} = req.body;
    try {
        const respuesta = await pool.query (`CALL SP_MODIFICAR_USUARIO (?,?, ?, ?, ?, ?, ?, ?)`, [id, identificacion, nombres, telefono, correo, contrasena, rol, estado]);
        if (respuesta[0].affectedRows == 1){
            Acceso(req, res, 201,"Usuario modificado:" + correo);
        }else{
            Error(req, res, 400, "No se pudo modificar el usuario: " + correo);    
        }
    } catch (err) {
        Error(req, res, 400, err);
    }
}
export const eliminarUsuario = async (req,res)=>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_USUARIO(?)`, [id]);
        res.json(respuesta[0])
    } catch (error) {
        res.json({"error": "el usuario no ha sido eliminado"})
    }
}
export const logueoUsuario = async(req,res)=>{
    const { correo, contrasena } = req.body;
    console.log(correo + contrasena);
    try {
        const respuesta = await pool.query(`CALL SP_BUSCAR_USUARIO(?)`, [correo]);
        if (respuesta[0][0] == 0) {
            Error(req, res, 404, "Usuario no existe");
            return;
        }
        const match = await bcrypt.compare(contrasena, respuesta[0][0][0].contrasena);
        console.log(respuesta[0][0][0].contrasena); 
        if(!match){
            Error(req, res, 401, "Contraseña Incorrecta");
            return;
        }

        let payload = {
            "correo": respuesta.correo,
            
        }; 
        let token = jwt.sign(payload,process.env.TOKEN_PRIVATEKEY,
            {
                expiresIn : process.env.TOKEN_EXPIRES_IN
            });

        Acceso(req, res, 200, {token});


    } catch (e) {
        Error(req, res, 500, "Error en el servidor, por favor inténtalo de nuevo más tarde");
        console.log(e);
    }
    }
export const validarToken = (req, res) => {
        Acceso(req, res, 200, {"token": "El token es valido"});
    }
//poner un export para poder hacer la documentacion del codigo despues de terminar con el backend    
