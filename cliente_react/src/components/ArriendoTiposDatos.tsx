import type { ArriendoActivoTipos } from "../types/arriendos"

type ArriendoActivoTiposProps = 
{
    arriendoActivoTipos: ArriendoActivoTipos
}

export function arregloTipo(tipoV: string)
{
    if (tipoV === "Sedan")    
        return "Sedán"; 
    else
        return tipoV;      
}

export default function ArriendoTiposDatos({arriendoActivoTipos}: ArriendoActivoTiposProps) 
{
    return (
        <>               
        <div className="col-lg-4 col-md-12 col-6 mb-6">
            <div className="card h-100">
                <div className="card-body">                          
                    <p className="mb-1">{arregloTipo(arriendoActivoTipos.tipo_Vehiculo)}</p>
                    <h4 className="card-title mb-3">{arriendoActivoTipos.arriendos}</h4>                          
                </div>
            </div>  
            </div>                  
        </>
    )
}