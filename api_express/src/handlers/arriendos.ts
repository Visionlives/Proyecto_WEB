// Se encarga de pedir los arriendos de la base de datos (en algun momento xD)
import {Request, Response} from "express";

// Obtiene todos los arriendos
export const getArriendos = async (request:Request, response:Response) => {
    response.json("Aqui estarian todos los arriendos (si es que hubiese alguno AAA)")
}

// Obtiene la informacion de un arriendo en especifico mediante ID, por ende hay que pasarle uno
// para que sepa cual arriendo seleccionar
export const getArriendoById = async (request:Request, response:Response) => {
    // La constante es "id" porque mi endpoint es "/arriendos/:id"
    const {id} = request.params
    response.json("Arriendo con ID: " + id)
}

// Ingresar arriendo
export const ingreArriendo = async (request:Request, response:Response) => {
    response.json("Aqui ingresaremos / registraremos los arriendos que se hagan")
}

// Registrar devolucion de arriendo (necesitaremos el ID)
export const devolArriendo = async (request:Request, response:Response) => {
    const {id} = request.params
    response.json("Aqui registraremos la devolucion de un arriendo: " + id)
}

// Eliminar arriendo (necesitaremos el ID)
export const elimArriendo = async (request:Request, response:Response) => {
    const {id} = request.params
    response.json("Aqui eliminaremos un arriendo: " + id)
}