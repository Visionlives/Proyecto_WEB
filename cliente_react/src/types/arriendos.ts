import { array, nullable, number, object, string, type InferOutput } from "valibot";

//Schemas
    //Este Schema es para traer los datos de una columna del api de arrendamiento activos
    //En los Schemas no se utiliza "date()" se utiliza un "string()" por que el backend envia strings
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

export const ArriendoTerminadoSchema = object
(
    {
        id: number(),
        fechaInicio: string(),
        fechaFin: string(),
        patenteVehiculo: string(),
        tipoVehiculo: string(),
        rutCliente: string(),
        nombreCliente: string(),
    }
);

export const IngresoArriendoSchema = object
(
    {
        patenteVehiculo: string(),
        tipoVehiculo: string(),
        rutCliente: string(),
        nombreCliente: string(),
    }
);

    //Este Schema es para traer los datos de toda la tabla del api de arrendamiento activos
export const ArriendosActivosSchema = array(ArriendoActivoSchema);
export const ArriendosTerminadosSchema = array(ArriendoTerminadoSchema);
//export const ArriendosTerminadosSchema = object({})

//Types 
    //Un objeto que entiende los atributos del schema ArriendoActivoSchema
export type ArriendoActivo = InferOutput<typeof ArriendoActivoSchema>;
export type ArriendoTerminado = InferOutput<typeof ArriendoTerminadoSchema>;

//export type ArriendosActivos = InferOutput<typeof ArriendosActivosSchema>;