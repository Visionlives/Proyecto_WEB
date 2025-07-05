import { array, nullable, number, object, string, type InferOutput } from "valibot";

export const ArriendoActivoSchema = object
(
    {
        id: number(),
        fechaInicio: string(),
        fechaFin: nullable(string()),
        patenteVehiculo: string(),
        tipoVehiculo: string(),
        rutCliente: string(),
        nombreCliente: string(),
    }
);