/**
 * Importacion de la base de datos
 * @module controladores
 */
import { pool } from "../config/mysql.db.js";


/**
 * Se creo la constancia de mostrar el producto
 * @param {object} req Peticion
 * @param {object} res Respuesta 
 */
const mostrarProducto = async (req,res)=>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_PRODUCTO (?)`, [id]);
        res.json(respuesta[0])
    } catch (error) {
        res.json({"error": error})
    }
}


/**
 * Se creo la constancia de listar el producto
 * @param {object} req Peticion
 * @param {object} res Respuesta 
 * @returns 
 */
const listarProducto = async (req,res)=>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_PRODUCTO()`);
        return respuesta[0];
    } catch (error) {
        res.json({"error": error})
    }
}


/**
 * Se creo la constancia de crear los productos
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const crearProducto = async (req, res)=>{
    const {producto, categoria, preciou, descripcion, imagen, stock} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_CREAR_PRODUCTO ("${producto}", "${categoria}", "${preciou}", "${descripcion}" , "${imagen}",
        "${stock}")`);
        res.json({"respuesta": respuesta[0]})
    } catch(error){
        res.json({"error": "El producto no se pudo agregar"})
    }
}


/**
 * Se creo la constancia de modificar los productos
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const modificarProducto = async (req,res)=>{
    const {id} = req.params
    const {producto, categoria, preciou, descripcion, imagen, stock} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_MODIFICAR_PRODUCTO ("${id}", "${producto}","${categoria}", "${preciou}",
         "${descripcion}", "${imagen}", "${stock}");`);
        res.json({"respuesta": respuesta[0]})
    } catch (error) {
        res.json({"error": "el producto no ha sido modificado"})
    }
}


/**
 * Se creo la constancia de eliminar el producto
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const eliminarProducto = async (req,res)=>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_PRODUCTO(?);`, [id]);
        res.json(respuesta[0])
    } catch (error) {
        res.json({"error": "el producto no fue eliminado"})
    }
}
export {
    mostrarProducto, listarProducto,
    crearProducto, modificarProducto,
    eliminarProducto
}