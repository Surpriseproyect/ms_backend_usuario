/**
 * Importanciones de los paquetes necesarios
 * @module controladores
 */
import bcrypt from "bcrypt";
import { pool } from "../config/mysql.db.js";
import { Acceso, Error } from "../message/mensaje.js";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();

/**
 * Se creo la constancia mostrar usuario
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const mostrarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const [respuesta] = await pool.query(`CALL SP_MOSTRAR_USUARIO(?)`, [id]);
        if (respuesta && respuesta.length > 0) {
            res.json(respuesta[0]);
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Se creo la constancia fiado 
 * @param {object} req Peticion
 * @param {object} res Respuesta
 * @returns 
 */
const fiados = async (req, res) =>{
    try {
        const respuesta = await pool.query('SELECT * FROM usuarios WHERE estado = "fiado" or estado = "pendiente";')
        return respuesta[0];
    } catch (error) {
        console.error(error);
        return { "error": error };
    }
}


/**
 * Se creo la constancia para listar un usuario
 * @param {object} req Peticion
 * @param {object} res Respuesta
 * @returns 
 */
const listarUsuario = async (req, res) => {
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_USUARIO()`);
        return respuesta[0];
    } catch (error) {
        console.error(error);
        return { "error": error };
    }
};


/**
 * Se creo la constancia para crear el usuario
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const crearUsuario = async (req, res)=>{
    const {identificacion, nombres, telefono, correo,rol, estado} = req.body;
    const contrasenasincifrar = req.body.contrasena;
    try {
        const hash = await bcrypt.hash(contrasenasincifrar, 2)
        const contrasena = hash;
        const respuesta = await pool.query (`CALL SP_CREAR_USUARIO (?,?,?,?,?,?,?)`, [identificacion, nombres, telefono, correo, contrasena, rol, estado]);
            res.json({"respuesta": "el usuario ha sido creado"})
    } catch (error) {
        console.log(error);
    }
}


/**
 * Se creo la constancia de modificar el usuario
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const modificarUsuario = async (req,res)=>{
    const {id} = req.params
    const {identificacion, nombres, telefono, correo, rol, estado} = req.body;
    const contrasenasincifrar = req.body.contrasena;
    const contrasena = await bcrypt.hash(contrasenasincifrar, 2);
    try {
        
        const respuesta = await pool.query (`CALL SP_MODIFICAR_USUARIO (?, ?, ?, ?, ?, ?, ?)`, [id, identificacion, nombres, telefono, contrasena, rol, estado]);

        if (respuesta[0].affectedRows == 1){
            Acceso(req, res, 201,"Usuario modificado:"  +  correo);
        }else{
            Error(req, res, 400, "No se pudo modificar el usuario: "  +  correo);    
        }
    } catch (err) {
        Error(req, res, 400, err);
    }
}


/**
 * Se creo la constancia para actualizar el estado
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const actualizarEstado = async (req,res)=>{
    const {id} = req.params
    const {estado} = req.body;
    try {
        
        const respuesta = await pool.query (`CALL SP_ACTULIZAR_ESTADOS (?, ?)`, [id, estado]);

        if (respuesta[0].affectedRows == 1){
            Acceso(req, res, 201,"Estado modificado:"  +  estado);
        }else{
            Error(req, res, 400, "No se pudo modificar el estado");    
        }
    } catch (err) {
        Error(req, res, 400, err);
    }
}


/**
 * Se creo la constancia para eliminar el usuario
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const eliminarUsuario = async (req,res)=>{
    const {id} = req.params
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_USUARIO(?)`, [id]);
        res.json({"respuesta": "eliminado"})
    } catch (error) {
        res.json({"error": "el usuario no ha sido eliminado"})
    }
}


/**
 * Se creo la constancia para loguear el usuario
 * @param {object} req Peticion
 * @param {object} res Respuesta
 * @returns 
 */
const logueoUsuario = async(req,res)=>{
    const { correo, contrasena } = req.body;
    console.log(correo + contrasena)
    try {
        const rol = await pool.query(`CALL SP_VERIFICAR_ROLES(?)`, [correo])
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
            "correo": respuesta[0][0][0].correo,
            
        }; 
        let token = jwt.sign(payload,process.env.TOKEN_PRIVATEKEY,
            {
                expiresIn : process.env.TOKEN_EXPIRES_IN
            });
        
            if(rol[0][0][0].rol === "Gerente"){
                Acceso(req, res, 200, {token, "rol": "/dashboard"});
            } else if(rol[0][0][0].rol === "Cajero"){
                Acceso(req, res, 200, {token, "rol": "/cajero"});
            }

    } catch (e) {
        Error(req, res, 500, "Error en el servidor, por favor inténtalo de nuevo más tarde");
        console.log(e);
    }
    }


    /**
     * Se creo la constacancia para validar el token
     * @param {object} req Peticion
     * @param {object} res Respuesta
     */
const validarToken = (req, res) => {
        Acceso(req, res, 200, {"token": "El token es valido"});
    }
export {
    mostrarUsuario, fiados, listarUsuario,
    crearUsuario, modificarUsuario, actualizarEstado,
    eliminarUsuario, logueoUsuario, validarToken
}    
