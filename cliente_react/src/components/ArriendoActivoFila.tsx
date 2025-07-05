import type { ArriendoActivo } from "../types/arriendos"

type ArriendoActivoFilaProps = 
{
    index: number,
    arriendoActivo: ArriendoActivo,
    onBorrar: (arriendoId: number) => void,
    onDevolver: (arriendoId: number) => void,
}

export function arregloFecha(fecha: string)
{
    const num = fecha.indexOf('T').valueOf();
    console.log(num);
    const aux = fecha.substring(0, num);
    fecha = aux + " " + fecha.substring(num + 1, fecha.indexOf('.'));
    return fecha;
}

export function arregloPatente(patente: string)
{
    const aux = patente.substring(0, 4);
    patente = aux + "-" + patente.substring(4, patente.length);
    return patente;
}

export function arregloTipo(tipoV: string)
{
    if (tipoV === "Sedan")    
        return "Sedán"; 
    else
        return tipoV;      
}

export default function ArriendoActivoFila({index, arriendoActivo, onBorrar, onDevolver}:ArriendoActivoFilaProps) 
{
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{arregloPatente(arriendoActivo.patenteVehiculo)}</td>
                <td>{arregloTipo(arriendoActivo.tipoVehiculo)}</td>
                <td>{arriendoActivo.rutCliente}</td>
                <td>{arriendoActivo.nombreCliente}</td>
                <td>{arregloFecha(arriendoActivo.fechaInicio)}</td>
                <td>
                    <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="icon-base bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" onClick={()=>onDevolver(arriendoActivo.id)}>
                                <i className="icon-base bx bx-edit-alt me-1"></i> Finalizar
                            </a>
                            <a className="dropdown-item" onClick={()=>onBorrar(arriendoActivo.id)}>
                                <i className="icon-base bx bx-trash me-1"></i> Borrar
                            </a>
                        </div>
                    </div>
                </td>
            </tr>   
        </>
    )
}