import { config } from "dotenv";
import {listarUsuario, fiados} from "./controllers.usuario.js"
import { listarProducto } from "./controllers.producto.js";
config();

export const inicio = (req, res)=>{
    const url = process.env.BACKEND_URL;
    const opciones = {
        url : url
    }
    res.render("views.login.ejs", opciones);
}
export const sobrenosotros = (req, res)=>{
    res.render("views.sobrenosotros.ejs")
}
export const productos = async (req, res)=>{
    try {
        const producto = await listarProducto(req, res);
        res.render("views.productos.ejs", {producto: producto[0]})
    } catch (error) {
        res.json({ "error": error });
    }
}
export const dashboard = async (req, res) => {
    try {
        const respuesta = await listarUsuario(req, res);
        const producto = await listarProducto(req, res);
        const fiado = await fiados(req, res);
        res.render("views.dashboard.ejs", { 
            usuarios: respuesta[0],
            producto: producto[0],
            fiado: fiado
         });
    } catch (error) {
        res.json({ "error": error });
    }
};