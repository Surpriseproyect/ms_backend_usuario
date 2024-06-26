import { Router } from "express";
import { actualizarPedido, listarPedido } from "../controllers/controllers.pedido.js";


const routesPedidos = Router();


routesPedidos.get("/", listarPedido)
routesPedidos.put("/:id", actualizarPedido)

export default routesPedidos;