import Express, { request, response } from "express";
import router from "./router";
import db from "./config/database";
import cors, {CorsOptions} from "cors"

const server = Express()

// Endpoint de prueba
// server.get("/", (request, response) => {
//     response.send("Hola Don Juanito Express!")
// })

// Conexion a la Base de Datos
async function conectarBD(){
    try {
        await db.authenticate()
        db.sync()
        console.log("Conexion a la BD exitosa Don Juanito")
    } catch (error) {
        console.log("Hubo un error en la conexion a la BD Don Juanito :c")
        console.log(error)
    }
}

conectarBD()

// Configuracion de CORS
const corsOptions: CorsOptions = {
    origin: function(origin, callback){
        if (!origin || origin === process.env.FRONTEND_URL){
            callback(null, true)
        }else{
            callback(new Error("No eres bienvenido"), false)
        }
    }
}

server.use(cors(corsOptions))

// Para habilitar la lectura del JSON que envia el cliente
server.use(Express.json())

// Aquellos request que comiencen con /api seran manejados por el archivo router.ts
server.use("/api", router)

export default server