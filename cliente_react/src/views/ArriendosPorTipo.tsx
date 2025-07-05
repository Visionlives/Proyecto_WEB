import { useLoaderData } from "react-router-dom";
import { getArriendosPorTipoV } from "../services/ArriendosService";
import type { ArriendoActivoTipos } from "../types/arriendos";
import ArriendoTiposDatos from "../components/ArriendoTiposDatos";

export async function loader()
{
    const arriendosActivosTipos = await getArriendosPorTipoV();
    return arriendosActivosTipos;
};

export default function ArriendosPorTipo()
{
    const arriendosActivosTipos = useLoaderData() as ArriendoActivoTipos[];
    return (
        <>
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="card mb-4">
                <h5 className="card-header">Arriendos activos por tipo de vehiculo</h5>
                </div>
            <div className="col-xxl-4 col-lg-12 col-md-4 order-1">
                  <div className="row">
                    
                    {arriendosActivosTipos.map((arriendosActivosTipos) => 
                        (
                            <ArriendoTiposDatos key={arriendosActivosTipos.tipo_Vehiculo} arriendoActivoTipos={arriendosActivosTipos}/>
                        ))
                    }
                                       
                  </div>
                </div>
                
                </div>
        </>
    )
}