import { Router } from "express";
import { actualizarEstado, crearFactura, listarFactura, mostrarFactura } from "../controllers/controllers.factura.js";

const rutaFactura = Router();

rutaFactura.get("/factura/:id", mostrarFactura);
rutaFactura.get("/factura", listarFactura);
rutaFactura.post("/factura", crearFactura);
rutaFactura.put("/factura/:id", actualizarEstado);

export default rutaFactura;