import { useRef } from "react";
import {Form, redirect, useActionData, type ActionFunctionArgs} from "react-router-dom";
import { cambiarPassword } from "../services/UsuariosService";

export async function action({request}: ActionFunctionArgs)
{
    const formData = Object.fromEntries(await request.formData());
    const resultado = await cambiarPassword(formData); //Poner aqui nueva function de UsuariosService

    if (!resultado.success)
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
                      <label htmlFor="password" className="form-label">Contraseña actual</label>
                      <input className={`form-control ${actionData?.detalleErrores?.password ?`is-invalid` : ''}`} type="password" id="password" name="password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"/>
                      {'password' in (actionData?.detalleErrores || {}) && (<div className="invalid-feedback"> {actionData?.detalleErrores?.password[0]} </div>)}
                    </div>                                                                          
                    <div className="col-md-6">
                      <label htmlFor="passN" className="form-label">Nueva contraseña</label>
                      <input className={`form-control ${actionData?.detalleErrores?.passN ?`is-invalid` : ''}`} type="password" id="passN" name="passN" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"/>
                      {'passN' in (actionData?.detalleErrores || {}) && (<div className="invalid-feedback"> {actionData?.detalleErrores?.passN[0]} </div>)}
                    </div>   
                    <div className="col-md-6">
                      <label htmlFor="passNC" className="form-label">Confirma nueva contraseña</label>
                      <input className={`form-control ${actionData?.detalleErrores?.passNC ?`is-invalid` : ''}`} type="password" id="passNC" name="passNC" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"/>
                      {'passNC' in (actionData?.detalleErrores || {}) && (<div className="invalid-feedback"> {actionData?.detalleErrores?.passNC[0]} </div>)}
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