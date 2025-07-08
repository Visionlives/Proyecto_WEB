import { useRef } from "react";
import {Form, redirect, useActionData, type ActionFunctionArgs} from "react-router-dom";

export async function action({request}: ActionFunctionArgs)
{
    const formData = Object.fromEntries(await request.formData());
    const resultado = await ingreArriendo(formData); //Poner aqui nueva function de UsuariosService

    if (!resultado?.success)
    {
        return resultado;
    } 
    return redirect('/');
}

export default function CambiarContrasenna() 
{
  const actionData = useActionData() as 
    {
      success?: boolean 
      error?: string 
      detalleErrores: { [key: string]: string[] }
    };
  const formRef = useRef<HTMLFormElement | null>(null) ;
  const handleReset = () => 
  {
    formRef.current?.reset();
  }

  return ( 
      <>
          <div className="container-xxl flex-grow-1 container-p-y">                  
            <div className="card mb-6">                
              <div className="card-body pt-4">
                <h5 className="card-title text-primary mb-3">Ingresa tu nueva contraseña</h5>
                {/* Div de error */}
                {actionData?.error &&                   
                  <div className="alert alert-danger " >{actionData?.error}</div>
                }
                <Form id="formAccountSettings" method="POST" ref={formRef}>
                  <div className="row g-6">                         
                    <div className="col-md-6">
                      <label htmlFor="contrasennaActual" className="form-label">Contraseña actual</label>
                      <input className={`form-control ${actionData?.detalleErrores?.contrasennaActual ?`is-invalid` : ''}`} type="password" id="contrasennaActual" name="contrasennaActual" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"/>
                      {'contrasennaActual' in (actionData?.detalleErrores || {}) && (<div className="invalid-feedback"> {actionData?.detalleErrores?.contrasennaActual[0]} </div>)}
                    </div>                                                                          
                    <div className="col-md-6">
                      <label htmlFor="contrasennaNueva" className="form-label">Nueva contraseña</label>
                      <input className={`form-control ${actionData?.detalleErrores?.contrasennaNueva ?`is-invalid` : ''}`} type="password" id="contrasennaNueva" name="contrasennaNueva" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"/>
                      {'contrasennaNueva' in (actionData?.detalleErrores || {}) && (<div className="invalid-feedback"> {actionData?.detalleErrores?.contrasennaNueva[0]} </div>)}
                    </div>   
                    <div className="col-md-6">
                      <label htmlFor="contrasennaNuevaConf" className="form-label">Confirma nueva contraseña</label>
                      <input className={`form-control ${actionData?.detalleErrores?.contrasennaNuevaConf ?`is-invalid` : ''}`} type="password" id="contrasennaNuevaConf" name="contrasennaNuevaConf" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"/>
                      {'contrasennaNuevaConf' in (actionData?.detalleErrores || {}) && (<div className="invalid-feedback"> {actionData?.detalleErrores?.contrasennaNuevaConf[0]} </div>)}
                    </div>                                                                                                                       
                  </div>
                  <div className="mt-6">
                    <button type="submit" className="btn btn-primary me-3">Confirmar</button> 
                    <button type="button" className="btn btn-primary me-3" onClick={handleReset}>Restablecer</button>                        
                  </div>
                </Form>
              </div>
            </div>     
          </div>
      </>
  )
}