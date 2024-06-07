import { Router } from "express";
import rutaProducto from "./routes.producto";
import rutaUsuario from "./routes.usuario";
import rutaProveedor from "./routes.proveedor";
import rutaFactura from "./routes.facturas";
import rutaMetoPago from "./routes.metopago";
import rutaLogin from "./routes.login";
// import swaggerui from "swagger-ui-express";
// import swaggerFile from "../"

const ruta = Router();

ruta.use("/producto", rutaProducto);
ruta.use("/usuario", rutaUsuario);
ruta.use("/proveedor", rutaProveedor);
ruta.use("/factura", rutaFactura);
ruta.use("/metopago", rutaMetoPago);
//Rutas views
ruta.use("/", rutaLogin);

export default ruta;