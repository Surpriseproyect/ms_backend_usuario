import { mensa, mensajeconsola } from "./message/mensaje";
import server from "./server";





server.listen(server.get("port"),()=> {
    mensajeconsola("AccesoPuerto",
        `${mensa.puerto} ${server.get("port")} http://localhost${server.get("port")}`)
})