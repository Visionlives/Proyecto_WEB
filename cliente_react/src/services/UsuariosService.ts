import { safeParse } from "valibot";
import { LoginFormSchema } from "../types/usuarios";
import axios from '../services/axiosInstance';

type UsuarioFormData = 
{
    [k:string]: FormDataEntryValue;
}

export async function login(formData: UsuarioFormData) 
{
    try
    {
        const resultado = safeParse(LoginFormSchema, formData);
                
        if (resultado.success) 
        {
            const url = `/login`; 
            const {data} = await axios.post(url, resultado.output);
            localStorage.setItem('token', data.token);            
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
    catch (error: any) 
    {
        return{
            success: false,
            error: error.response?.data?.error ?? 'Error inesperado',
        }    
    }  
}

export async function crearUsuario(formData: UsuarioFormData ) 
{
    try
    {
        const resultado = safeParse(LoginFormSchema, formData);
        if (resultado.success) 
        {
            console.log("Error1");
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

// export async function crearUsuario(formData: UsuarioFormData) 
// {
//     try
//     {
//         const resultado = safeParse(LoginFormSchema, formData);
                
//         if (resultado.success) 
//         {
//             const url = `/login`; 
//             const {data} = await axios.post(url, resultado.output);
//             localStorage.setItem('token', data.token);            
//             return {success: true};
//         } 
//         else 
//         {
//             const detalleErrores: Record<string, string[]> = {}
            
//             for (const issue of resultado.issues) 
//             {
//                 const campo = issue.path![0].key as string
//                 if (!detalleErrores[campo]) 
//                 {
//                     detalleErrores[campo] = [];
//                 }
//                 detalleErrores[campo].push(issue.message);
//             }
//             console.log(detalleErrores[0]);
//             return { success: false, error: "El formulario contiene errores", detalleErrores: detalleErrores };
//         }   
//     }   
//     catch (error: any) 
//     {
//         return{
//             success: false,
//             error: error.response?.data?.error ?? 'Error inesperado',
//         }    
//     }  
// }