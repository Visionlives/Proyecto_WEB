import { useRef } from "react";
import {Form, redirect, useActionData, type ActionFunctionArgs} from "react-router-dom";
import { crearUsuario } from "../services/UsuariosService";

export async function action({request}: ActionFunctionArgs)
{
    const formData = Object.fromEntries(await request.formData());
    const resultado = await crearUsuario(formData); //Poner aqui nueva function de UsuariosService

    if (!resultado.success)
    {
        return resultado;
    } 
    return redirect('/');
}

export default function CrearUsuario() 
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

  return( 
      <>
          <div className="container-xxl flex-grow-1 container-p-y">                  
            <div className="card mb-6">                
              <div className="card-body pt-4">
                <h5 className="card-title text-primary mb-3">Ingresa los datos para crear un nuevo usuario</h5>
                {/* Div de error */}
                {
                  actionData?.error &&                   
                  <div className="alert alert-danger " >{actionData?.error}</div>
                }
                <Form id="formAccountSettings" method="POST" ref={formRef}>
                  <div className="row g-6">
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">E-mail</label>
                      <input className={`form-control ${actionData?.detalleErrores?.email ?`is-invalid` : ''}`} type="text" id="email" name="email" placeholder="donpepe@example.com" />
                      {'email' in (actionData?.detalleErrores || {}) && (<div className="invalid-feedback"> {actionData?.detalleErrores?.email[0]} </div>)}
                    </div>                                                                          
                    <div className="col-md-6 form-password-toggle">
                        <label className="form-label" htmlFor="password">Contraseña</label>                        
                        <input className={`form-control ${actionData?.detalleErrores?.password ?`is-invalid` : ''}`} type="password" id="password" name="password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="contrasenna" /> 
                        {'password' in (actionData?.detalleErrores || {}) && (<div className="invalid-feedback"> {actionData?.detalleErrores?.password[0]} </div>)}                          
                    </div>
                  </div>
                  <div className="mt-6">
                    <button type="submit" className="btn btn-primary me-3">Crear cuenta</button>
                    <button type="button" className="btn btn-primary me-3" onClick={handleReset}>Restablecer</button>                    
                  </div>
                </Form>
              </div>
            </div>                  
          </div>
      </>
  )
}