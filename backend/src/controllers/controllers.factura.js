/**
 * Importacion de la base de datos
 * @module controladores
 */
import { pool } from "../config/mysql.db.js";

/**
 * Se creo la contancia mostrar factura para poder mostrar todas las facturas ingresadas por el gerente y cajero
 * @param {Object} req Peticion
 * @param {Object} res Respuesta
 */
const mostrarFactura = async (req,res) =>{
    const {id} = req.params;
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_FACTURA ("${id}")`);
        res.json({"respuesta": respuesta[0][0]})
    } catch (error) {
        res.json({"error": error})
    }
}


/**
 * Se creo la constancia de listar la factura para poder mostrar las facturas sin necesidad de pedir el id
 * @param {*} req Peticion
 * @param {*} res Respuesta
 * @returns 
 */
const listarFactura = async (req,res)=>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_FACTURA()`);
        return respuesta[0];
    } catch (error) {
        res.json({"error": error})
    }
}

/**
 * Se creo la constancia de crear factura
 * mediante los pedidos para poder dar los permisos al gerente y cajero de hacerlo
 * @param {*} req Peticion
 * @param {*} res Respuesta
 */
const crearFactura = async (req,res)=>{
    const {idusuario, fecha, idmetodopago, estado, ncuenta} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_CREAR_FACTURA (?,?,?,?,?)`, [idusuario, fecha, idmetodopago, estado, ncuenta]);
        res.json({"respuesta": "la factura ha sido creada"})
    } catch (error) {
        // res.json({"error": "La factura no ha sido creada"})
        console.log(error);
    }
}


/**
 * Se creo la constancia actualizar estado para ver el estado del cliente
 * @param {*} req Peticion
 * @param {*} res Respuesta
 */
const actualizarEstado = async (req,res)=>{
    const {id} = req.body;
    try {
        const respuesta = await pool.query(`CALL SP_ESTADO_FACTURA(?)`, [id]);
        res.json({"respuesta": "Estado actualizado"})
    } catch (error) {
        console.log(error);
    }
}

/**
 * Se creo la constancia contador de las ventas para poder llevar un orden
 * @param {*} req Peticion
 * @param {*} res Respuesta
 * @returns 
 */
const contadorVentas = async (req, res) =>{
    try {
        const respuesta = await pool.query(`CALL SP_CONTADOR_VENTAS()`)
        return respuesta[0]
    } catch (error) {
        console.log(error);
    }
}


/**
 * Se creo la constancia del total de las ventas
 * @param {*} req Peticion
 * @param {*} res Respuesta
 * @returns 
 */
const totalVentas = async (req, res) =>{
    try {
        const respuesta = await pool.query(`CALL SP_TOTAL_VENTAS()`)
        return respuesta[0]
    } catch (error) {
        console.log(error);
    }
}
export {
    mostrarFactura, listarFactura,
    crearFactura, actualizarEstado,
    contadorVentas, totalVentas
}