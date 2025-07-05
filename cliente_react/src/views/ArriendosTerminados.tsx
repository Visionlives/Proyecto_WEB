import { useLoaderData } from "react-router-dom";
import { elimArriendo, getArriendosTerminados } from "../services/ArriendosService";
import type { ArriendoTerminado } from "../types/arriendos";
import ArriendoTerminadoFila from "../components/ArriendoTerminadoFila";
import { useState } from "react";

export async function loader()
{
    const arriendosTerminados = await getArriendosTerminados();
    return arriendosTerminados;
};

export default function Home()
{
    const arriendosTerminadosIniciales = useLoaderData() as ArriendoTerminado[];        
    const [arriendosTerminados, setArriendos] = useState<ArriendoTerminado[]>(arriendosTerminadosIniciales);

    const handleEliminar = async (arriendoId:number) =>
    {
        await elimArriendo(arriendoId);
        //filter genera una nueva lista filtrada
        setArriendos(arriendosTerminados.filter(arr => arr.id !== arriendoId));
    }

    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">    
                <div className="card">
                    <h5 className="card-header">Arriendos terminados</h5>
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
                                    <th>Fecha fin</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                {arriendosTerminados.map((arriendosTerminados, index) => 
                                (
                                    <ArriendoTerminadoFila key={arriendosTerminados.id} index={index} arriendoTerminado={arriendosTerminados} onBorrar={handleEliminar}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}