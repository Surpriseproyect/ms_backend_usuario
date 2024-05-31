import { Router } from "express";
import { crearProveedor, eliminarProveedor,
         listarProveedor, mostrarProveedor } from "../controllers/controllers.proveedor";


const rutaProveedor = Router();

rutaProveedor.get("/proveedor/:id", mostrarProveedor)
rutaProveedor.get("/proveedor", listarProveedor)
rutaProveedor.post("/proveedor", crearProveedor )
rutaProveedor.delete("/proveedor", eliminarProveedor)


export default rutaProveedor;