import { pool } from "../config/mysql.db.js";

export const mostrarProducto = async (req,res)=>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_PRODUCTO (?)`, [id]);
        res.json({"respuesta": respuesta[0]})
    } catch (error) {
        res.json({"error": error})
    }
}
export const listarProducto = async (req,res)=>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_PRODUCTO()`);
        // res.json({"respuesta": respuesta[0]})
        return respuesta[0];
    } catch (error) {
        res.json({"error": error})
    }
}
export const crearProducto = async (req, res)=>{
    const {producto, categoria, preciou, descripcion, stock} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_CREAR_PRODUCTO ("${producto}", "${categoria}", "${preciou}", "${descripcion}",
        "${stock}")`);
        res.json({"respuesta": "El producto se agrego"})
    } catch(error){
        res.json({"error": "El producto no se pudo agregar"})
    }
}
export const modificarProducto = async (req,res)=>{
    const {idproducto, producto, categoria, preciou, descripcion, stock} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_MODIFICAR_PRODUCTO ("${idproducto}", "${producto}","${categoria}", "${preciou}",
         "${descripcion}", "${stock}");`);
        res.json({"respuesta": "el producto ha sido modificado"})
    } catch (error) {
        res.json({"error": "el producto no ha sido modificado"})
    }
}
export const eliminarProducto = async (req,res)=>{
    const {id} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_PRODUCTO ("${id}");`);
        res.json({"respuesta": "el producto fue eliminado"})
    } catch (error) {
        res.json({"error": "el producto no fue eliminado"})
    }
}