import express from "express";
import { config } from "dotenv";
import rutaProducto from "./routes/routes.producto.js";
import rutaUsuario from "./routes/routes.usuario.js";
import rutaProveedor from "./routes/routes.proveedor.js";
import rutaFactura from "./routes/routes.facturas.js";
import rutaMetoPago from "./routes/routes.metopago.js";
import ruta from "./routes/index.js";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from "cors";
import morgan from "morgan";
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, "../../frontend/public")));
server.use(express.urlencoded({ extended : true }));
server.use(cors());
server.use(morgan("dev"))

//Rutas
server.use("/", ruta);

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, '../../frontend/views'));
server.set("port", process.env.PORT || 3000)




export default server;