import { pool } from "../config/mysql.db";

export const mostrarUsuario = async (req, res)=>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query (`CALL SP_MOSTRAR_USUARIO ("${id}")`)
        res.json({"respuesta": respuesta[0]})
    } catch (error) {
        res.json({"error": error})
    }
}
export const listarUsuario = async (req,res) =>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_USUARIO()`);
        res.json({"respuesta": respuesta[0]})
    } catch (error) {
        res.json({"error": error})
    }
}
export const crearUsuario = async (req, res)=>{
    const {identificacion, nombres, telefono, correo, contrasena, rol, estado} = req.body;
    try {
        const respuesta = await pool.query (`CALL SP_CREAR_USUARIO (?,?,?,?,?,?,?)`, [identificacion, nombres, telefono, correo, contrasena, rol, estado]);
            res.json({"respuesta": "el usuario ha sido creado"})
    } catch (error) {
            res.json({"error": "el usuario no ha sido creado"})
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