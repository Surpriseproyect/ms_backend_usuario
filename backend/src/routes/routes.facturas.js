import { Router } from "express";
import { crearFactura, listarFactura, mostrarFactura } from "../controllers/controllers.factura.js";

const rutaFactura = Router();

rutaFactura.get("/factura/:id", mostrarFactura);
rutaFactura.get("/factura", listarFactura);
rutaFactura.post("/factura", crearFactura);

export default rutaFactura;