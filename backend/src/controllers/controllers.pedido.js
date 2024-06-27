import { pool } from "../config/mysql.db.js";

export const listarPedido = async(req, res) => {
    try {
        const respuesta = await pool.query("CALL SP_LISTARPEDIDO();")
        return respuesta[0]
    } catch (error) {
        res.status(500).json(error)
    }
}

export const contadorPedidos = async(req, res) => {
    try {
        const respuesta = await pool.query("CALL SP_CONTADOR_PEDIDO();")
        return respuesta[0]
    } catch (error) {
        res.status(500).json(error)
    }
}

export const crearPedido = async(req, res) => {
    const {_idusuario, _idproducto, _idmetodopago, _cantidad, _total, _estado} = req.body
    try {
        const respuesta = await pool.query("CALL SP_CREAR_PEDIDO(?, ?, ?, ?, ?, ?)", [_idusuario, _idproducto, _idmetodopago, _cantidad, _total, _estado]);
        return respuesta[0]
    } catch (error) {
        res.status(500).json(error);        
    }
}

export const actualizarPedido = async(req, res) => {
    const {id} = req.params;
    const {estado} = req.body;
    try {
        const respuesta = await pool.query("CALL SP_ACTUALIZAR_PEDIDO(?, ?)", [id, estado]);
        return respuesta[0]
    } catch (error) {
        res.status(500).json(error);
    }
}

export const eliminarPedido = async (req,res)=>{
    const {id} = req.params
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_PEDIDO(?)`, [id]);
        res.json({"respuesta": "eliminado"})
    } catch (error) {
        res.json({"error": "el usuario no ha sido eliminado"})
    }
}