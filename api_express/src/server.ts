import Express, { request, response } from "express";

const server = Express()

server.get("/", (request, response) => {
    response.send("Hola Don Juanito Express!")
})

export default server