import { Router } from "express";
import { ListarPago, MostrarPago, crearPago, eliminarPago } from "../controllers/controllers.metopago.js";

const rutaMetoPago = Router()

rutaMetoPago.get("/metopago/:id", MostrarPago);
rutaMetoPago.get("/metopago", ListarPago);
rutaMetoPago.post("/metopago", crearPago );
rutaMetoPago.delete("/metopago/:id", eliminarPago );


export default rutaMetoPago;
