import { useLoaderData } from "react-router-dom";
import { devolArriendo, elimArriendo, getArriendosActivos } from "../services/ArriendosService";
import type { ArriendoActivo } from "../types/arriendos";
import ArriendoActivoFila from "../components/ArriendoActivoFila";
import { useState } from "react";

export async function loader()
{
    const arriendosActivos = await getArriendosActivos();
    return arriendosActivos;
};

export default function Home()
{
    //Poder reiniciar la BD en la pagina de forma automatica
    const arriendosActivosIniciales = useLoaderData() as ArriendoActivo[];
    const [arriendosActivos, setArriendos] = useState<ArriendoActivo[]>(arriendosActivosIniciales);

    const handleEliminar = async (arriendoId:number) =>
    {
        await elimArriendo(arriendoId);
        //filter genera una nueva lista filtrada
        setArriendos(arriendosActivos.filter(arr => arr.id !== arriendoId));
        // setArriendosTipos(arriendosActivosTipos.filter(arr => arr.arriendos !== arriendoId));
    }

    const handleDevolver = async (arriendoId:number) =>
    {
        await devolArriendo(arriendoId);
        setArriendos(arriendosActivos.filter(arr => arr.id !== arriendoId));
    }    
   
    return (
        <>            
            <div className="container-xxl flex-grow-1 container-p-y">                    
                <div className="card">
                    <h5 className="card-header">Arriendos activos</h5>
                    <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th>N°</th>
                                    <th>Patente</th>
                                    <th>Tipo</th>
                                    <th>Rut Cliente</th>
                                    <th>Nombre Cliente</th>
                                    <th>Fecha inicio</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                {arriendosActivos.map((arriendosActivos, index) => 
                                (
                                    <ArriendoActivoFila key={arriendosActivos.id} index={index} arriendoActivo={arriendosActivos} onBorrar={handleEliminar} onDevolver={handleDevolver}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}