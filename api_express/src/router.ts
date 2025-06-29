// Aqui se definen los endpoints de nuestra aplicacion
import {Router} from "express";
import { 
    devolArriendo, 
    elimArriendo, 
    getArriendoById, 
    getArriendos, 
    getArriendosActivos, 
    getArriendosTerminados, 
    ingreArriendo } from "./handlers/arriendos";

const router = Router()

// Endpoints de los Arriendos

// Obtener todos los arriendos
router.get("/arriendos", getArriendos)

// Obtener todos los arriendos activos
router.get("/arriendos/activos", getArriendosActivos)

// Obtener todos los arriendos terminados
router.get("/arriendos/terminados", getArriendosTerminados)

// Ingresar arriendo
router.post("/arriendos", ingreArriendo)

// Registrar devolucion (modificamos un arriendo en el fondo)
router.patch("/arriendos/:id", devolArriendo)

// Eliminar arriendo
router.delete("/arriendos/:id", elimArriendo)

// Siempre las rutas con variables al final, asi se invocan los endpoints correctos
router.get("/arriendos/:id", getArriendoById)

export default router