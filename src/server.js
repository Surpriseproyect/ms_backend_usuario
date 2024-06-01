import express from "express"
import rutaProducto from "./routes/routes.producto";
import rutaUsuario from "./routes/routes.usuario";
import rutaProveedor from "./routes/routes.proveedor";
import rutaFactura from "./routes/routes.facturas";
import rutaMetoPago from "./routes/routes.metopago";

const server = express();

server.use(express.json());
server.use("/producto", rutaProducto);
server.use("/usuario", rutaUsuario);
server.use("/proveedor", rutaProveedor);
server.use("/factura", rutaFactura);
server.use("/metopago", rutaMetoPago);


export default server;