import { Router } from "express";
import { actualizarPedido, eliminarPedido, listarPedido } from "../controllers/controllers.pedido.js";


const routesPedidos = Router();


routesPedidos.get("/", listarPedido)
routesPedidos.put("/:id", actualizarPedido)
routesPedidos.delete("/:id", eliminarPedido)


export default routesPedidos;