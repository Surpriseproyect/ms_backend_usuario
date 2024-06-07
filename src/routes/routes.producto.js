import { Router } from "express";
import { crearProducto, eliminarProducto,
     listarProducto, modificarProducto,
      mostrarProducto } from "../controllers/controllers.producto";


 const rutaProducto = Router();

 rutaProducto.get("/producto/:id", mostrarProducto)
 rutaProducto.get("/producto", listarProducto)
 rutaProducto.post("/producto", crearProducto)
 rutaProducto.put("/producto", modificarProducto)
 rutaProducto.delete("/producto", eliminarProducto)


export default rutaProducto;