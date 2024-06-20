import { Router } from "express";
import { listarPedido } from "../controllers/controllers.pedido.js";


const routesPedidos = Router();


routesPedidos.get("/", listarPedido)


export default routesPedidos;