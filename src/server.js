import express from "express"
import rutaProducto from "./routes/routes.producto";

const server = express();

server.use(express.json());
server.use("/api", rutaProducto);


export default server;