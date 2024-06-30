/**
 * @module IndexPrincipal
 */
import { mensa, mensajeconsola } from "./message/mensaje.js"
import server from "./server.js";


/**
 * Este es el index principal donde se ejecuta el puerto
 */


server.listen(server.get("port"),()=> {
    mensajeconsola("AccesoPuerto",
        `${mensa.puerto} ${server.get("port")} http://localhost:${server.get("port")}`)
})