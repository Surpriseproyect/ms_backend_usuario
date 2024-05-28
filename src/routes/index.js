import { Router } from "express";
import rutaProducto from "./routes.producto";

const ruta = Router();

ruta.use("/api", rutaProducto);

export default ruta;