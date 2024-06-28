import { Router } from "express";
import rutaLogin from "./routes.login.js";
import rutaDash from "./routes.dashboard.js";

const enrutador = Router();


enrutador.use("/", rutaLogin)
enrutador.use("/dashboard", rutaDash)


export default enrutador;