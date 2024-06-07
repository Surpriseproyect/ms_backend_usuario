import express from "express";
import { config } from "dotenv";
import rutaProducto from "./routes/routes.producto";
import rutaUsuario from "./routes/routes.usuario";
import rutaProveedor from "./routes/routes.proveedor";
import rutaFactura from "./routes/routes.facturas";
import rutaMetoPago from "./routes/routes.metopago";
import ruta from "./routes";
import ejs from "ejs";
import path from "path";
import cors from "cors";
import morgan from "morgan";
config();

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(express.urlencoded({ extended : true }));
server.use(cors());


//rutas
server.use("/producto", rutaProducto);
server.use("/usuario", rutaUsuario);
server.use("/proveedor", rutaProveedor);
server.use("/factura", rutaFactura);
server.use("/metopago", rutaMetoPago);
//ruta views
server.use("/", ruta);

server.set("view engine", "ejs");
server.set("views", path.join(__dirname + "/views"))
server.set("port", process.env.PORT || 3000)
server.use(express.static(path.join(__dirname + "/public")))

//error 404
server.use("/", (req,res)=>{
    res.render("views.error404.ejs");
})



export default server;