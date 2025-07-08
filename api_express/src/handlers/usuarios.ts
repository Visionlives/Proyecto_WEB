import { Request, Response } from "express";
import Usuario from "../models/Usuario";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (request: Request, response: Response) => {
    const {email, password} = request.body
    const SECRET = process.env.SECRET_KEY

    try {
        // Vemos si hay un usuario con estas credenciales
        const usuario = await Usuario.findByPk(email)

        if (!usuario || !bcrypt.compareSync(password, usuario.password)){
            response.status(401).json({error: "Email o password incorrectos :c"})
        }

        // Todo correcto hasta aca
        const token = jwt.sign({email: usuario.email}, SECRET, {expiresIn: "1h"})
        response.json({token, email})
    } catch (error) {
        console.error("Error en el servidor de Don Juanito al iniciar sesion :c ", error)
        response.status(500).json({error: "Error interno en el servidor de Don Juanito :c"})
    }
}

export const crearUsuario = async (request: Request, response: Response) => {
    const {email, password} = request.body

    if (!email || !password){
        response.status(400).json({error: "Email y password son necesarios :c"})
    }

    try {
        const existe = await Usuario.findByPk(email)
        if(existe){
            response.status(409).json({error: "Este email ya esta registrado en la automotora :c"})
        }

        const nuevoUsuario = await Usuario.create({email, password})
        response.status(201).json({message: "Usuario creado exitosamente"})
    } catch (error) {
        console.error("Error en el registro Don Juanito :c ", error)
        response.status(500).json({error: "Error interno de la automotora :c"})
    }
}

export const cambiarPassword = async (request: Request, response: Response) => {
    const {email, password, passN, passNC} = request.body
    
    try {
        // Vemos si hay un usuario con estas credenciales
        const usuario = await Usuario.findByPk(email);

        if (!bcrypt.compareSync(password, usuario.password)){
            response.status(401).json({error: "Password incorrecta :c"});
            return;
        }

        if (passN !== passNC) {
            response.status(400).json({error: "Las nuevas contraseñas no coinciden :c"});
            return;
        }

        usuario.password = await bcrypt.hash(passN, 10);
        await usuario.save();

        response.json("Password cambiada de manera exitosa c:");
    } catch (error) {
        console.error("Error en el servidor de Don Juanito al cambiar password :c ", error);
        response.status(500).json({error: "Error interno en el servidor de Don Juanito al cambiar password :c"});
    }
}