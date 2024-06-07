import { config } from "dotenv";
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
export const productos = (req, res)=>{
    res.render("views.productos.ejs")
}
export const dashboard = (req, res)=>{
    res.render("views.dashboard.ejs")
}