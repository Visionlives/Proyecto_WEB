import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function verificarToken(request:Request, response:Response, next: NextFunction){
    const authHeader = request.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")){
        response.status(401).json({error: "No hay token"})
    }
    
    // El token llega de esta manera: Bearer JSAJSAJKJADKADJSK1234.COM
    const token = authHeader.split(" ")[1]
    const SECRET = process.env.SECRET_KEY!

    try {
        const decoded = jwt.verify(token, SECRET);
        (request as any).usuario = decoded
        next()
    } catch (error) {
        response.status(403).json({error: "Token no valido o expirado"})
    }
}