import { Router } from "express";
import rutaProducto from "./routes.producto.js";
import rutaUsuario from "./routes.usuario.js";
import rutaProveedor from "./routes.proveedor.js";
import rutaFactura from "./routes.facturas.js";
import rutaMetoPago from "./routes.metopago.js";
import rutaLogin from "./routes.login.js";

const ruta = Router();

ruta.use("/producto", rutaProducto);
ruta.use("/usuario", rutaUsuario);
ruta.use("/proveedor", rutaProveedor);
ruta.use("/factura", rutaFactura);
ruta.use("/metopago", rutaMetoPago);
//Rutas views
ruta.use("/", rutaLogin);

export default ruta;