/**
 * Importacion de la base de datos
 * @module controladores
 */
import { pool } from "../config/mysql.db.js";


/**
 * Se creo la constancia para mostrar el pago
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
export const MostrarPago = async (req, res) =>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_METODOPAGO ("${id}")`);
        res.json({"respuesta": respuesta[0][0]})
    } catch (error) {
        res.json({"respuesta": error})
    }
}

/**
 * Se creo la constancia para listar el pago
 * @param {object} req Peticion
 * @param {object} res Respuesta
 * @returns 
 */
export const ListarPago = async (req,res)=>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_METODOPAGO()`);
        return respuesta[0][0]
    } catch (error) {
        res.json({"respuesta": error})
    }
}

/**
 * Se creo la constancia para crear el pago
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
export const crearPago = async (req,res)=>{
    const {tipopago} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_CREAR_METODOPAGO ("${tipopago}")`)
        res.json({"respuesta": "El metodo de pago ha sido creado"})
    } catch (error) {
        res.json({"error": "El metodo de pago no se creo"})
    }
}

/**
 * Se creo la constancia para eliminar el pago
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
export const eliminarPago = async (req, res) => {
    const { id } = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_METODOPAGO(?)`, [id]);
        res.json({ "respuesta": "El metodo de pago ha sido eliminado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": "El metodo de pago no se elimino" });
    }
};