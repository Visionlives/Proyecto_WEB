import { array, maxLength, nonEmpty, nullable, number, object, pipe, string, type InferOutput, length } from "valibot";

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
        patenteVehiculo: pipe(string(),nonEmpty('La patente no puede estar vacía'), length(6, 'La patente debe contener 6 digitos')),
        tipoVehiculo: pipe(string(), nonEmpty('Debes seleccionar un tipo de vehiculo')),
        rutCliente: pipe(string(), nonEmpty('El rut del cliente no puede estar vacío'), length(10, 'El rut debe contener 10 digitos')),
        nombreCliente: pipe(string(), nonEmpty('El nombre del cliente no puede estar vacío'), maxLength(50, 'El nombre no puede exceder los 50 caracteres'))
    }
);

export const ArriendoActivoTiposSchema = object
(
    {
        tipo_Vehiculo: string(),
        arriendos: number(),
    }
);

    //Este Schema es para traer los datos de toda la tabla del api de arrendamiento activos
export const ArriendosActivosSchema = array(ArriendoActivoSchema);
export const ArriendosTerminadosSchema = array(ArriendoTerminadoSchema);
export const ArriendosActivosTiposSchema = array(ArriendoActivoTiposSchema);

//Types 
    //Un objeto que entiende los atributos del schema ArriendoActivoSchema
export type ArriendoActivo = InferOutput<typeof ArriendoActivoSchema>;
export type ArriendoTerminado = InferOutput<typeof ArriendoTerminadoSchema>;
export type ArriendoActivoTipos = InferOutput<typeof ArriendoActivoTiposSchema>;

//export type ArriendosActivos = InferOutput<typeof ArriendosActivosSchema>;