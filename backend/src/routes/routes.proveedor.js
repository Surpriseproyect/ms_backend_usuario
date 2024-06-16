import { Router } from "express";
import { crearProveedor, eliminarProveedor,
         listarProveedor, mostrarProveedor } from "../controllers/controllers.proveedor.js";


const rutaProveedor = Router();

rutaProveedor.get("/proveedor/:id", mostrarProveedor)
rutaProveedor.get("/proveedor", listarProveedor)
rutaProveedor.post("/proveedor", crearProveedor )
rutaProveedor.delete("/proveedor/:id", eliminarProveedor)


export default rutaProveedor;