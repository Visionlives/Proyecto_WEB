import Express, { request, response } from "express";
import router from "./router";
import db from "./config/database";

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

// Aquellos request que comiencen con /api seran manejados por el archivo router.ts
server.use("/api", router)

export default server