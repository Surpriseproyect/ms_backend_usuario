/**
 * Rutas
 * @module rutas
 */
import { Router } from "express";
import { actualizarPedido, eliminarPedido, listarPedido } from "../controllers/controllers.pedido.js";


const routesPedidos = Router();

/**
 * Se utilizo las ruta de pedidos para poder utilizar el controlador de pedido
 */
routesPedidos.get("/", listarPedido)
routesPedidos.put("/:id", actualizarPedido)
routesPedidos.delete("/:id", eliminarPedido)


export default routesPedidos;