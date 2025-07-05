import type { ArriendoActivo } from "../types/arriendos"

type ArriendoActivoFilaProps = 
{
    index: number,
    arriendoActivo: ArriendoActivo
}

export function arregloStrings(fecha: string)
{
    const num = fecha.indexOf('T').valueOf();
    console.log(num);
    const aux = fecha.substring(0, num);
    fecha = aux + " " + fecha.substring(num + 1, fecha.indexOf('.'));
    return fecha;
}

export default function ArriendoActivoFila({index, arriendoActivo}:ArriendoActivoFilaProps) 
{
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{arriendoActivo.patenteVehiculo}</td>
                <td>{arriendoActivo.tipoVehiculo}</td>
                <td>{arriendoActivo.rutCliente}</td>
                <td>{arriendoActivo.nombreCliente}</td>
                <td>{arregloStrings(arriendoActivo.fechaInicio)}</td>
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