import { pool } from "../config/mysql.db.js";


export const mostrarProveedor = async (req, res) =>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_PROVEEDOR("${id}")`);
        res.json({"respuesta": respuesta[0][0]})
    } catch (error) {
        res.json({"error": error})
    }
}
export const listarProveedor = async (req,res)=>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_PROVEEDORES()`);
        res.json({"respuesta": respuesta[0][0]})
    } catch (error) {
        res.json({"error": error})
    }
}
export const crearProveedor = async (req,res)=>{
    const {proveedor} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_CREAR_PROVEEDORES (?)`, [proveedor]);
        res.json({"respuesta": "el proveedor ha sido agregado"})
    } catch (error) {
        res.json({"error": "el proveedor no se agrego"})
    }
}
export const eliminarProveedor = async (req,res)=>{
    const {idproveedor}= req.body;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_PROVEEDOR (?)`, [idproveedor]);
        res.json({"respuesta": "el proveedor ha sido eliminado"})
    } catch (error) {
        res.json({"error": "el proveedor no ha sido eliminado"})
    }
}