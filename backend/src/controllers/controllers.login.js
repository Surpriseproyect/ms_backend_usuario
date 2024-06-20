
/**
 * Importaciones para los controladores del login
 * @type {object}
 */
import { config } from "dotenv";
import {listarUsuario, fiados} from "./controllers.usuario.js"
import { listarProducto } from "./controllers.producto.js";
import { listarFactura } from "./controllers.factura.js";
import { listarPedido } from "./controllers.pedido.js";
import { ListarPago } from "./controllers.metopago.js";
import { listarProveedor } from "./controllers.proveedor.js";
config();

/**
 * Inicio donde se encuentra el login
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const inicio = (req, res)=>{
    const url = process.env.BACKEND_URL;
    const opciones = {
        url : url
        };
    res.render("views.login.ejs", opciones);
}
/**
 * Es la informacion de nuestra Web
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const sobrenosotros = (req, res)=>{
    res.render("views.sobrenosotros.ejs")
}
/**
 * Los productos
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
const productos = async (req, res)=>{
    try {
        const producto = await listarProducto(req, res);
        res.render("views.productos.ejs", {producto: producto[0]})
    } catch (error) {
        res.json({ "error": error });
    }
}
/**
 * Menu del cajero
 * @param {object} req Peticion
 * @param {object} res Respuesta
 */
 const dashboard = async (req, res) => {
    try {
        const respuesta = await listarUsuario(req, res);
        const producto = await listarProducto(req, res);
        const factura = await listarFactura(req, res);
        const fiado = await fiados(req, res);
        const pedido = await listarPedido(req, res);
        const metopago = await ListarPago(req, res);
        const proveedor = await listarProveedor(req, res);
        res.render("views.dashboard.ejs", { 
            usuarios: respuesta[0],
            producto: producto[0],
            fiado: fiado,
            factura: factura[0],
            pedido: pedido[0],
            metopago: metopago,
            proveedor: proveedor
         });
    } catch (error) {
        res.json({ "error": error });
    }
};

const cajero = async (req, res) => {
    try {
        const respuesta = await listarUsuario(req, res);
        const producto = await listarProducto(req, res);
        const factura = await listarFactura(req, res);
        const fiado = await fiados(req, res);
        const pedido = await listarPedido(req, res);
        const metopago = await ListarPago(req, res);
        const proveedor = await listarProveedor(req, res);
        res.render("views.cajero.ejs", { 
            usuarios: respuesta[0],
            producto: producto[0],
            fiado: fiado,
            factura: factura[0],
            pedido: pedido[0],
            metopago: metopago,
            proveedor: proveedor
         });
    } catch (error) {
        res.json({ "error": error });
    }
};
export { dashboard, 
        cajero,
        productos,
        sobrenosotros,
        inicio}