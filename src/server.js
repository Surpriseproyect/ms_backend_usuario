import express from "express"
import rutaProducto from "./routes/routes.producto";
import rutaUsuario from "./routes/routes.usuario";
import rutaProveedor from "./routes/routes.proveedor";

const server = express();

server.use(express.json());
server.use("/producto", rutaProducto);
server.use("/usuario", rutaUsuario);
server.use("/proveedor", rutaProveedor);


export default server;