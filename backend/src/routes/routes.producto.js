/**
 * Rutas
 * @module Rutas
 */
import { Router } from "express";
import { crearProducto, eliminarProducto,
     listarProducto, modificarProducto,
      mostrarProducto } from "../controllers/controllers.producto.js";


 /**
  * Se utilizo las rutas productos para poder mostrar, listar, crear, modificar y eliminar los
  * productos
  */     
 const rutaProducto = Router();

 rutaProducto.get("/producto/:id", mostrarProducto)
 rutaProducto.get("/producto", listarProducto)
 rutaProducto.post("/producto", crearProducto)
 rutaProducto.put("/producto/:id", modificarProducto)
 rutaProducto.delete("/producto/:id", eliminarProducto)


export default rutaProducto;