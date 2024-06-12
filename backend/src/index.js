import { mensa, mensajeconsola } from "./message/mensaje.js"
import server from "./server.js";





server.listen(server.get("port"),()=> {
    mensajeconsola("AccesoPuerto",
        `${mensa.puerto} ${server.get("port")} http://localhost:${server.get("port")}`)
})