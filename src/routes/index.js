import { Router } from "express";
import rutaProducto from "./routes.producto";
import rutaUsuario from "./routes.usuario";

const ruta = Router();

ruta.use("/producto", rutaProducto);
ruta.use("/usuario", rutaUsuario);

export default ruta;