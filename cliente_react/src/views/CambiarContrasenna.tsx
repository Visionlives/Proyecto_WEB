import { useRef } from "react";
import {Form} from "react-router-dom";

export default function CambiarContrasenna() 
{
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
                  <Form id="formAccountSettings" method="POST" ref={formRef}>
                    <div className="row g-6">                         
                      <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Contraseña actual</label>
                        <input className="form-control" type="password" id="passwordActual" name="password" />
                      </div>                                                                          
                      <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Nueva contraseña</label>
                        <input className="form-control" type="password" id="passwordNueva" name="password" />
                      </div>   
                      <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Confirma nueva contraseña</label>
                        <input className="form-control" type="password" id="passwordNuevaConf" name="password" />
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