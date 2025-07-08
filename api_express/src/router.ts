// Aqui se definen los endpoints de nuestra aplicacion
import {Router} from "express";
import { 
    devolArriendo, 
    elimArriendo,  
    getArriendos, 
    getArriendosActivos, 
    getArriendosPorTipoV, 
    getArriendosTerminados, 
    ingreArriendo } from "./handlers/arriendos";
import { cambiarPassword, crearUsuario, login } from "./handlers/usuarios";
import { verificarToken } from "./middleware/verificarToken";

const router = Router()

// Middleware

router.post("/login", login)

router.use(verificarToken)

// Endpoints de los Arriendos

// Obtener todos los arriendos
router.get("/arriendos", getArriendos)

// Obtener todos los arriendos activos
router.get("/arriendos/activos", getArriendosActivos)

// Obtener todos los arriendos terminados
router.get("/arriendos/terminados", getArriendosTerminados)

// Obtener cantidad de arriendos por vehiculo
router.get("/arriendos/por-tipo-v", getArriendosPorTipoV)

// Ingresar arriendo
router.post("/arriendos", ingreArriendo)

// Registrar devolucion (modificamos un arriendo en el fondo)
router.patch("/arriendos/:id", devolArriendo)

// Eliminar arriendo
router.delete("/arriendos/:id", elimArriendo)

// Crear usuario
router.post("/usuario/crear", crearUsuario)

// Cambiar password
router.post("/usuario/cambiar-password", cambiarPassword)

export default router