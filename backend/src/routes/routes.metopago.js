/**
 * Rutas
 * @module Rutas
 */
import { Router } from "express";
import { ListarPago, MostrarPago, crearPago, eliminarPago } from "../controllers/controllers.metopago.js";

const rutaMetoPago = Router()

/**
 * Rutas para poder utilizar los metodos de pago
 */
rutaMetoPago.get("/metopago/:id", MostrarPago);
rutaMetoPago.get("/metopago", ListarPago);
rutaMetoPago.post("/metopago", crearPago );
rutaMetoPago.delete("/metopago/:id", eliminarPago );


export default rutaMetoPago;
