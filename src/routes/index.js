import { Router } from "express";
import rutaProducto from "./routes.producto";
import rutaUsuario from "./routes.usuario";
import rutaProveedor from "./routes.proveedor";
import rutaFactura from "./routes.facturas";
import rutaMetoPago from "./routes.metopago";

const ruta = Router();

ruta.use("/producto", rutaProducto);
ruta.use("/usuario", rutaUsuario);
ruta.use("/proveedor", rutaProveedor);
ruta.use("/factura", rutaFactura);
ruta.use("/metopago", rutaMetoPago);

export default ruta;