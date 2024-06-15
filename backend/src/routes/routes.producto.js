import { Router } from "express";
import { crearProducto, eliminarProducto,
     listarProducto, modificarProducto,
      mostrarProducto } from "../controllers/controllers.producto.js";


 const rutaProducto = Router();

 rutaProducto.get("/producto/:id", mostrarProducto)
 rutaProducto.get("/producto", listarProducto)
 rutaProducto.post("/producto", crearProducto)
 rutaProducto.put("/producto/:id", modificarProducto)
 rutaProducto.delete("/producto/:id", eliminarProducto)


export default rutaProducto;