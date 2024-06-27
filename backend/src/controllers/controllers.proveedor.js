/**
 * Se importo la base de datos
 * @module controladores
 */
import { pool } from "../config/mysql.db.js";


/**
 * Se creo la constancia de mostrar los proveedores
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const mostrarProveedor = async (req, res) =>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_PROVEEDOR("${id}")`);
        res.json({"respuesta": respuesta[0][0]})
    } catch (error) {
        res.json({"error": error})
    }
}


/**
 * Se creo la constancia de listar el proveedor
 * @param {object} req Peticion
 * @param {object} res Respuesta
 * @returns 
 */
const listarProveedor = async (req,res)=>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_PROVEEDORES()`);
        return respuesta[0][0]
    } catch (error) {
        res.json({"error": error})
    }
}


/**
 * Se creo la constancia de crear un proveedor
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const crearProveedor = async (req,res)=>{
    const {proveedor} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_CREAR_PROVEEDORES(?)`, [proveedor]);
        res.json({"respuesta": "el proveedor ha sido agregado"})
    } catch (error) {
        res.json({"error": "el proveedor no se agrego"})
    }
}


/**
 * Se creo la constancia de eliminar un proveedor
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const eliminarProveedor = async (req,res)=>{
    const {id}= req.params;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_PROVEEDOR (?)`, [id]);
        res.json({"respuesta": "el proveedor ha sido eliminado"})
    } catch (error) {
        res.json({"error": "el proveedor no ha sido eliminado"})
    }
}
export {
    mostrarProveedor, listarProveedor,
    crearProveedor, eliminarProveedor
}