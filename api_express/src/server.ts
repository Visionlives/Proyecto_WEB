import Express, { request, response } from "express";
import router from "./router";

const server = Express()

// Endpoint de prueba
// server.get("/", (request, response) => {
//     response.send("Hola Don Juanito Express!")
// })

// Aquellos request que comiencen con /api seran manejados por el archivo router.ts
server.use("/api", router)

export default server