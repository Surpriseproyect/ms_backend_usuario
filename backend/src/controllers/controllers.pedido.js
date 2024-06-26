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