import { useLoaderData } from "react-router-dom";
import { getArriendosTerminados } from "../services/ArriendosService";
import type { ArriendoTerminado } from "../types/arriendos";
import ArriendoTerminadoFila from "../components/ArriendoTerminadoFila";

export async function loader()
{
    const arriendosTerminados = await getArriendosTerminados();
    return arriendosTerminados;
};

export default function Home()
{
    const arriendosTerminados = useLoaderData() as ArriendoTerminado[];
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
                                    <ArriendoTerminadoFila key={arriendosTerminados.id} index={index} arriendoTerminado={arriendosTerminados} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}