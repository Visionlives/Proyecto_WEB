import type { ArriendoTerminado } from "../types/arriendos"

type ArriendoTerminadoFilaProps = 
{
    index: number,
    arriendoTerminado: ArriendoTerminado
}

export function arregloStrings(fecha: string)
{
    const num = fecha.indexOf('T').valueOf();
    console.log(num);
    const aux = fecha.substring(0, num);
    fecha = aux + " " + fecha.substring(num + 1, fecha.indexOf('.'));
    return fecha;
}

export default function ArriendoTerminadoFila({index, arriendoTerminado}:ArriendoTerminadoFilaProps) 
{
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{arriendoTerminado.patenteVehiculo}</td>
                <td>{arriendoTerminado.tipoVehiculo}</td>
                <td>{arriendoTerminado.rutCliente}</td>
                <td>{arriendoTerminado.nombreCliente}</td>
                <td>{arregloStrings(arriendoTerminado.fechaInicio)}</td>
                <td>{arregloStrings(arriendoTerminado.fechaFin)}</td>
                <td>
                    <div className="dropdown">
                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="icon-base bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);">
                                <i className="icon-base bx bx-edit-alt me-1"></i> Finalizar
                            </a>
                            <a className="dropdown-item" href="javascript:void(0);">
                                <i className="icon-base bx bx-trash me-1"></i> Borrar
                            </a>
                        </div>
                    </div>
                </td>
            </tr>   
        </>
    )
}