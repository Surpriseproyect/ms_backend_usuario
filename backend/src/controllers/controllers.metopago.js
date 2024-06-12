import { pool } from "../config/mysql.db.js";

export const MostrarPago = async (req, res) =>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_METODOPAGO ("${id}")`);
        res.json({"respuesta": respuesta[0][0]})
    } catch (error) {
        res.json({"respuesta": error})
    }
}
export const ListarPago = async (req,res)=>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_METODOPAGO()`);
        res.json({"respuesta": respuesta[0][0]})
    } catch (error) {
        res.json({"respuesta": error})
    }
}
export const crearPago = async (req,res)=>{
    const {tipopago} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_CREAR_METODOPAGO ("${tipopago}")`)
        res.json({"respuesta": "El metodo de pago ha sido creado"})
    } catch (error) {
        res.json({"error": "El metodo de pago no se creo"})
    }
}