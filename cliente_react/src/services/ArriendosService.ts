import axios from '../services/axiosInstance';
import { safeParse } from "valibot";
import { ArriendosActivosSchema, ArriendosActivosTiposSchema, ArriendosTerminadosSchema, IngresoArriendoSchema } from "../types/arriendos";

export async function getArriendosActivos() 
{
    try
    {
        const url = `/arriendos/activos`; 
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
        console.error("El error al obtener: ", error);
    }  
}

export async function getArriendosTerminados() 
{
    try
    {
        const url = `/arriendos/terminados`
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
        console.error("El error al obtener: ", error);
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
            const url = `/arriendos`;
            await axios.post(url, resultado.output);
            return {success: true};
        }
        else
        {
            const detalleErrores: Record<string, string[]> = {}
            
            for (const issue of resultado.issues) 
            {
                const campo = issue.path![0].key as string
                if (!detalleErrores[campo]) 
                {
                    detalleErrores[campo] = [];
                }
                detalleErrores[campo].push(issue.message);
            }
            console.log(detalleErrores[0]);
            return { success: false, error: "El formulario contiene errores", detalleErrores: detalleErrores };
        }
    }
    catch (error)
    {
        return { success: false, error: "No se pudo ingresar el arriendo" };
    }
}

export async function elimArriendo(arriendoId: number) 
{
    try
    {
        const url = `/arriendos/${arriendoId}`;        
        await axios.delete(url);        
        return { success: true };
    }
    catch (error)
    {
        return { success: false, error: "No se pudo eliminar el arriendo" };
    }
}

export async function devolArriendo(arriendoId: number) 
{
    try
    {        
        const url = `/arriendos/${arriendoId}`;        
        await axios.patch(url);        
        return { success: true };
    }
    catch (error)
    {
        return { success: false, error: "No se pudo devolver el arriendo" };
    }
}

export async function getArriendosPorTipoV() 
{
    try
    {
        const url = `/arriendos/por-tipo-v`; 
        const {data:arriendos} = await axios.get(url);
        const resultado = safeParse(ArriendosActivosTiposSchema, arriendos.data);
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
        console.error("El error al obtener: ", error);      
    }  
}