import express from "express"
import rutaProducto from "./routes/routes.producto";
import rutaUsuario from "./routes/routes.usuario";

const server = express();

server.use(express.json());
server.use("/producto", rutaProducto);
server.use("/usuario", rutaUsuario);


export default server;