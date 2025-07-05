import axios from "axios";
import { safeParse } from "valibot";
import { ArriendosActivosSchema, ArriendosTerminadosSchema, IngresoArriendoSchema } from "../types/arriendos";

export async function getArriendosActivos() 
{
    try
    {
        const url = `${import.meta.env.VITE_API_URL}/arriendos/activos`; 
        const {data:arriendos} = await axios.get(url);
        const resultado = safeParse(ArriendosActivosSchema, arriendos.data);
        if (resultado.success) 
        {
            return resultado.output;
        } 
        else 
        {
            throw new Error("Ocurrio un problema al solicitar los datos");
        }   
    }   
    catch (error) 
    {
        console.error("Error fetching active rentals:", error);       
    }  
}

export async function getArriendosTerminados() 
{
    try
    {
        const url = `${import.meta.env.VITE_API_URL}/arriendos/terminados`
        const {data:arriendos} = await axios.get(url);
        const resultado = safeParse(ArriendosTerminadosSchema, arriendos.data);
        if (resultado.success) 
        {
            return resultado.output;
        } 
        else 
        {
            throw new Error("Ocurrio un problema al solicitar los datos");
        }   
    }   
    catch (error) 
    {
        console.error("Error fetching active rentals:", error);       
    }  
}

type IngresarArriendoData =
{
    [k:string]: FormDataEntryValue
}

export async function ingreArriendo(formData: IngresarArriendoData ) 
{
    try
    {
        const resultado = safeParse(IngresoArriendoSchema, formData);
        if (resultado.success) 
        {
            console.log("Error1");
            const url = `${import.meta.env.VITE_API_URL}/arriendos`;
            await axios.post(url, 
                { 
                    patenteVehiculo: resultado.output.patenteVehiculo,
                    tipoVehiculo: resultado.output.tipoVehiculo,
                    rutCliente: resultado.output.rutCliente,
                    nombreCliente: resultado.output.nombreCliente,
                });
            return {success: true};
        }
    }
    catch (error)
    {
        console.error("Error fetching finished rentals:", error);
    }
}