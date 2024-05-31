import { Router } from "express";
import rutaProducto from "./routes.producto";
import rutaUsuario from "./routes.usuario";
import rutaProveedor from "./routes.proveedor";

const ruta = Router();

ruta.use("/producto", rutaProducto);
ruta.use("/usuario", rutaUsuario);
ruta.use("/proveedor", rutaProveedor);

export default ruta;