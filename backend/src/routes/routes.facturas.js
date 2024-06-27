/**
 * Rutas
 * @module rutas
 */
import { Router } from "express";
import { actualizarEstado, crearFactura, listarFactura, mostrarFactura } from "../controllers/controllers.factura.js";


const rutaFactura = Router();
/**
 * Se utiliza la rutaFactura para poder llamar las constancias hechas mediante
 * los controladores de facturas
 */
rutaFactura.get("/factura/:id", mostrarFactura);
rutaFactura.get("/factura", listarFactura);
rutaFactura.post("/factura", crearFactura);
rutaFactura.put("/factura/:id", actualizarEstado);

export default rutaFactura;