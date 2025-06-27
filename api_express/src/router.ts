// Aqui se definen los endpoints de nuestra aplicacion
import {Router} from "express";
import { 
    devolArriendo, 
    elimArriendo, 
    getArriendoById, 
    getArriendos, 
    ingreArriendo } from "./handlers/arriendos";

const router = Router()

// Endpoints de los Arriendos

// Obtener arriendos
router.get("/arriendos", getArriendos)

// Ingresar arriendo
router.post("/arriendos", ingreArriendo)

// Registrar devolucion (modificamos un arriendo en el fondo)
router.put("/arriendos/:id", devolArriendo)

// Eliminar arriendo
router.delete("/arriendos/:id", elimArriendo)

// Siempre las rutas con variables al final, asi se invocan los endpoints correctos
router.get("/arriendos/:id", getArriendoById)

export default router