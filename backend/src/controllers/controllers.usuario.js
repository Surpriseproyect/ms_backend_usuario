import bcrypt from "bcrypt";
import { pool } from "../config/mysql.db.js";
import { Acceso, Error } from "../message/mensaje.js";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { log } from "console";
config();

export const mostrarUsuario = async (req, res)=>{
    const {id} = req.params;
    try {
        const [respuesta] = await pool.query (`CALL SP_MOSTRAR_USUARIO ("${id}")`)
        // res.json({"respuesta": respuesta[0]})
        return respuesta[0]
    } catch (error) {
        res.json({"error": error})
    }
}

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
        return respuesta[0];
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
    const {idusuario, identificacion, nombres, telefono, correo, contrasena, rol, estado} = req.body;
    try {
        const respuesta = await pool.query (`CALL SP_MODIFICAR_USUARIO ("${idusuario}","${identificacion}", "${nombres}", "${telefono}"
            , "${correo}", "${contrasena}", "${rol}", "${estado}")`);
            res.json({"respuesta": "el usuario ha sido modificado"})
    } catch (error) {
            res.json({"error": "el usuario no ha sido modificado"})
    }
}
export const eliminarUsuario = async (req,res)=>{
    const {idusuario} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_USUARIO("${idusuario}")`);
        res.json({"respuesta": "el usuario ha sido eliminado"})
    } catch (error) {
        res.json({"error": "el usuario no ha sido eliminado"})
    }
}
export const logueoUsuario = async(req,res)=>{
    const { correo, contrasena } = req.body;
    console.log(correo + contrasena);
     //const hash = await bcrypt.hash(CLAVE, 2);
    try {
        const respuesta = await pool.query(`CALL SP_BUSCAR_USUARIO(?)`, [correo]);
        console.log(respuesta[0][0][0]);
        if (respuesta[0][0] == 0) {
            Error(req, res, 404, "Usuario no existe");
            return;
        }
        const match = await bcrypt.compare(contrasena, respuesta[0][0][0].contrasena);
        console.log(respuesta[0][0][0].contrasena);
        if(!match){
            Error(req, res, 401, "contraseña errada");
            return;
        }

        let payload = {
            "correo": correo,
            
        }; 
        let token = await jwt.sign(payload,process.env.TOKEN_PRIVATEKEY,
            {
                expiresIn : process.env.TOKEN_EXPIRES_IN
            });

        Acceso(req, res, 200, {token});


    } catch (e) {
        Error(req, res, 500, "Error en el servidor, por favor inténtalo de nuevo más tarde");
        console.log(e);
    }
    }