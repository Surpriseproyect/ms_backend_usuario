import { pool } from "../config/mysql.db.js";

export const mostrarFactura = async (req,res) =>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_FACTURA ("${id}")`);
        res.json({"respuesta": respuesta[0][0]})
    } catch (error) {
        res.json({"error": error})
    }
}
export const listarFactura = async (req,res)=>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_FACTURA()`);
        return respuesta[0];
    } catch (error) {
        res.json({"error": error})
    }
}
export const crearFactura = async (req,res)=>{
    const {idusuario, fecha, idmetodopago, estado, ncuenta} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_CREAR_FACTURA (?,?,?,?,?)`, [idusuario, fecha, idmetodopago, estado, ncuenta]);
        res.json({"respuesta": "la factura ha sido creada"})
    } catch (error) {
        // res.json({"error": "La factura no ha sido creada"})
        console.log(error);
    }
}

export const actualizarEstado = async (req,res)=>{
    const {id} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_ESTADO_FACTURA(?)`, [id]);
        res.json({"respuesta": "Estado actualizado"})
    } catch (error) {
        console.log(error);
    }
}

export const contadorVentas = async (req, res) =>{
    try {
        const respuesta = await pool.query(`CALL SP_CONTADOR_VENTAS()`)
        return respuesta[0]
    } catch (error) {
        console.log(error);
    }
}

export const totalVentas = async (req, res) =>{
    try {
        const respuesta = await pool.query(`CALL SP_TOTAL_VENTAS()`)
        return respuesta[0]
    } catch (error) {
        console.log(error);
    }
}