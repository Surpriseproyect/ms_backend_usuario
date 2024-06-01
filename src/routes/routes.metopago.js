import { Router } from "express";
import { ListarPago, MostrarPago, crearPago } from "../controllers/controllers.metopago";

const rutaMetoPago = Router()

rutaMetoPago.get("/metopago/:id", MostrarPago);
rutaMetoPago.get("/metopago", ListarPago);
rutaMetoPago.post("/metopago", crearPago )


export default rutaMetoPago;
